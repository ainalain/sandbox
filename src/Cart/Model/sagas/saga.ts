import { fork, takeEvery } from 'redux-saga/effects';

import { CartActions } from '../actions';

import { addProductToCart } from './addProductToCart';
import { cleanCart } from './cleanCart';
import { removePositionFromCart } from './removePositionFromCart';

const actions = [
  CartActions.TypeKeys.ADD_PRODUCT_TO_CART,
  CartActions.TypeKeys.REMOVE_POSITION_FROM_CART,
  CartActions.TypeKeys.CLEAN_CART,
];

export function* addProductToCartSaga(action: CartActions.ActionTypes) {
  switch (action.type) {
    case CartActions.TypeKeys.ADD_PRODUCT_TO_CART:
      yield fork(addProductToCart, action.payload);
      break;
    case CartActions.TypeKeys.REMOVE_POSITION_FROM_CART:
      yield fork(removePositionFromCart, action.payload, action.removeProduct);
      break;
    case CartActions.TypeKeys.CLEAN_CART:
      yield fork(cleanCart);
      break;
    default:
  }
}

function* watchProductCart() {
  yield takeEvery(actions, addProductToCartSaga);
}

export default watchProductCart;
