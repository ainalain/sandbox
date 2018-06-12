import { call, put } from 'redux-saga/effects';

import CartApi from '../../../api/cartApi/cartApi';
import { CartActions } from '../actions';

export function* addProductToCart(id: string) {
  try {
    const result = yield call(CartApi.addProductToCart, id);

    yield put({
      type: CartActions.TypeKeys.ADD_PRODUCT_TO_CART_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: CartActions.TypeKeys.ADD_PRODUCT_TO_CART_FAILURE,
      payload: err,
    });
  }
}
