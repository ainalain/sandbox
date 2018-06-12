import { fork, takeEvery } from 'redux-saga/effects';

import { ProductActions } from '../actions/actions';

import { getAllProducts } from './getAllProducts';
import { getProductById } from './getProductById';

const actions = [
  ProductActions.TypeKeys.GET_PRODUCT_BY_ID,
  ProductActions.TypeKeys.GET_ALL_PRODUCTS,
];

export function* getProductByIdSaga(action: ProductActions.ActionTypes) {
  switch (action.type) {
    case ProductActions.TypeKeys.GET_PRODUCT_BY_ID:
      yield fork(getProductById, action.payload);
      break;
    default:
    case ProductActions.TypeKeys.GET_ALL_PRODUCTS:
      yield fork(getAllProducts);
      break;
  }
}

function* watchProduct() {
  yield takeEvery(actions, getProductByIdSaga);
}

export default watchProduct;
