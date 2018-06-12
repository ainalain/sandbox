import { Model } from '../../Main/Model';

import { ProductInCartObject } from './store';

export const getCartUnitsAmount = (state: Model.Root): number => {
  if (state
    && state.cart
    && state.cart.products
    && Object.keys(state.cart.products).length) {

    let unitsCount: number = 0;
    Object.keys(state.cart.products).forEach((key: string) => {
      unitsCount = unitsCount + state.cart.products[key].amount;
    });
    return unitsCount;
  }
  return 0;
};

export const getCartProducts = (state: Model.Root): ProductInCartObject | undefined => {
  if (state
    && state.cart
    && state.cart.products) {
    return state.cart.products;
  }
  return undefined;
};

export const getCartError = (state: Model.Root): Error | undefined => {
  if (state
    && state.cart
    && state.cart.error) {
    return state.cart.error;
  }
  return undefined;
};
