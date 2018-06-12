import { Product } from '../../Bakery/Model/store';

import { products } from './products';

const delay = 1000;

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
export default class ProductsApi {
  static getAllProducts() {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          return resolve(products);
        },
        delay,
      );
    });
  }

  static getProductById(id: string): Promise<{}> {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          return products.filter((product: Product) => {
            if (product.id === id) {
              resolve(product);
            }
          });
        },
        delay,
      );
    });
  }
}
