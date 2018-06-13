import { call, put } from 'redux-saga/effects';

import CartApi from '../../../api/cartApi/cartApi';
import { CartActions } from '../actions';
import { ErrorsEnum } from '../store';

export function* addProductToCart(id: string) {
  try {
    if (navigator.onLine) {
      const result = yield call(CartApi.addProductToCart, id);

      yield put({
        type: CartActions.TypeKeys.ADD_PRODUCT_TO_CART_SUCCESS,
        payload: result,
      });
    } else {
      throw ({ name: ErrorsEnum.NetworkError, message: 'You are offline. Plesa, try again later.' });
    }
  } catch (err) {
    yield put({
      type: CartActions.TypeKeys.ADD_PRODUCT_TO_CART_FAILURE,
      payload: err,
    });
  }
}
