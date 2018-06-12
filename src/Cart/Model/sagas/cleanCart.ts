import { put } from 'redux-saga/effects';

import { CartActions } from '../actions';
// import CartApi from "../../../api/cartApi/cartApi";

export function* cleanCart() {
  try {
    // yield call(CartApi.removePositionFromCart);

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
