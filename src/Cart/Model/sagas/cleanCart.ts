import { put } from 'redux-saga/effects';

import { CartActions } from '../actions';

export function* cleanCart() {
  try {
    yield put({
      type: CartActions.TypeKeys.CLEAN_CART_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: CartActions.TypeKeys.CLEAN_CART_FAILURE,
      payload: err,
    });
  }
}
