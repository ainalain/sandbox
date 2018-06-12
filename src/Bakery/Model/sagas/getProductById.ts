import { call, put } from 'redux-saga/effects';

import ProductsApi from '../../../api/productApi/productsApi';
import {  ProductActions } from '../actions/actions';

export function* getProductById(id: string) {
  try {
    const result = yield call(ProductsApi.getProductById, id);
    yield put({
      type: ProductActions.TypeKeys.GET_PRODUCT_BY_ID_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: ProductActions.TypeKeys.GET_PRODUCT_BY_ID_FAILURE,
      payload: err,
    });
  }
}
