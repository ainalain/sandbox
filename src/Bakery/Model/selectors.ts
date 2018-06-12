import { Model } from '../../Main/Model';

import { Details } from './store';

export const productByIdSelector = (state: Model.Root, id: string) => {
  if (state
    && state.product
    && state.product.product) {

    return state.product.product;
  }

  return undefined;
};

export const getDetails = (state: Model.Root): Details | undefined => {
  if (state
    && state.product
    && state.product.details) {
    return state.product.details;
  }
  return undefined;
};
