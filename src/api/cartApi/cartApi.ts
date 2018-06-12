import { Product } from '../../Bakery/Model/store';
import {
  CartModel,
  ProductInCartObject
} from '../../Cart/Model/store';
import { convertToLowerCase } from '../../helpers/stringCase';
import { products as productsList } from '../productApi/products';

import { cart } from './cart';

export const makeName = (productName: string): string => {
  let matched = '';
  const cakes = 'cakes';
  const cupcakes = 'cupcakes';
  const wafers = 'wafers';

  const name = convertToLowerCase(productName);

  let nouns = name.match(RegExp('\\b' + cupcakes + '\\b', 'i'));
  matched = cupcakes;
  if (!nouns || !nouns.length) {
    nouns = name.match(RegExp('\\b' + cakes + '\\b', 'i'));
    matched = cakes;
  }

  if (!nouns || !nouns.length) {
    nouns = name.match(RegExp('\\b' + wafers + '\\b', 'i'));
    matched = wafers;
  }

  if (!nouns || !nouns.length) {
    return name;
  }
  const noun = nouns ? nouns[0] : null;

  let result: string = name;
  if (noun) {
    result = 'portion of ' + name.replace(matched, noun);
  }
  return result;
};

const delay = 1000;

let cartState: CartModel = cart;
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
export default class CartApi {
  static addProductToCart(id: string) {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          let newProducts: ProductInCartObject = {...cartState.products};
          const products = cartState.products;
          const length = Object.keys(products).length;
          let amount: number = 1;
          let label: string | undefined = products[id]
            ? products[id].label : undefined;
          let name: string = products[id] ? products[id].name : '';
          if (length && products[id]) {
            amount = products[id].amount + 1;
            label  = label ? label : makeName(products[id].name);
            newProducts[id] = {...products[id], amount, name };
          } else {
            const product = productsList.find((item: Product) => item.id === id);
            label = product ? makeName(product.name) : 'product';
            name = product ? product.name : 'product';
            newProducts[id] = { id, name, label, amount: 1 };
          }
          cartState.products = newProducts;
          resolve({ id, name, amount, label });
        },
        delay / 2,
      );
    });
  }

  /*
   * This is a bit tricky and strange to make a fake API, I know
   * We'll make a real backend in another sprint
   */
  static removePositionFromCart(id: string, removeProduct?: boolean) {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          let newProducts: ProductInCartObject = cartState.products;
          const products = cartState.products;
          const length = Object.keys(products).length;

          if (length && products[id]) {
            const amount = products[id].amount;
            let newAmount;
            if (amount > 1 && !removeProduct) {
              newAmount = products[id].amount - 1;
              newProducts[id] = {...products[id], amount: newAmount};
            } else {
              Object.keys(products).forEach((key: string) => {
                if (key !== id) {
                  newProducts[key] = products[key];
                } else {
                  newAmount = 0;
                  delete newProducts[key];
                }
              });
            }
            cartState.products = newProducts;
            resolve({ id, removeProduct });
          } else {
            resolve({ id, removeProduct });
          }
        },
        delay / 2
      );
    });
  }
}
