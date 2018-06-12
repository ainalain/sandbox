import { call, put } from 'redux-saga/effects';

import ProductsApi from '../../../api/productApi/productsApi';
import {  ProductActions } from '../actions/actions';

export function* getAllProducts() {
  try {
    const result = yield call(ProductsApi.getAllProducts);

    yield put({
      type: ProductActions.TypeKeys.GET_ALL_PRODUCTS_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: ProductActions.TypeKeys.GET_ALL_PRODUCTS_FAILURE,
      payload: err,
    });
  }
}
