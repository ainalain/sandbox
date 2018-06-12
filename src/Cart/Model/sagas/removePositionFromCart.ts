import { call, put } from 'redux-saga/effects';

import CartApi from '../../../api/cartApi/cartApi';
import { CartActions } from '../actions';

export function* removePositionFromCart(id: string, removeProduct?: boolean) {
  try {
    const result = yield call(CartApi.removePositionFromCart, id, removeProduct);

    yield put({
      type: CartActions.TypeKeys.REMOVE_POSITION_FROM_CART_SUCCESS,
      payload: result,
      removeProduct,
    });
  } catch (err) {
    yield put({
      type: CartActions.TypeKeys.REMOVE_POSITION_FROM_CART_FAILURE,
      payload: err,
    });
  }
}
