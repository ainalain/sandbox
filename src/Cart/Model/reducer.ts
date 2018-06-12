import { CartActions } from './actions';
import {
  CartModel, DefaultCartModel,
  ProductInCart, ProductInCartObject,
  RemovePayload,
} from './store';

export const addProductToCartHelper = (state: CartModel, payload: ProductInCart) => {
  const newState = { ...state.products };
  let item: any;
  item = Object.keys(newState).find((key: string) => key === payload.id);
  if (item) {
    Object.keys(newState).forEach((key: string) => {
      if (key === payload.id) {
        const amount = newState[key].amount + 1;
        newState[key] = { ...state[key], amount, name: payload.name, label: payload.label };
      }
    });
  } else {
    newState[payload.id] = payload;
  }
  return newState;
};

export const removeProductFromCartHelper = (
  state: CartModel,
  payload: RemovePayload,
  removeProduct?: boolean) => {

  const newState = { ...state.products };

  let item: any;
  item = Object.keys(newState).find((key: string) => key === payload.id);

  if (item) {
    Object.keys(newState).forEach((key: string) => {
      if (key === payload.id) {
        const amount = newState[key].amount - 1;

        if (amount === 0 || removeProduct) {
          delete newState[key];
        } else {
          newState[key] = { ...newState[key], amount };
        }
      }
    });
  }

  return newState;
};

export const cartReducer = (
  state: CartModel = DefaultCartModel,
  action: CartActions.ActionTypes): CartModel => {

  let error: Error;
  let newState: ProductInCartObject;

  switch (action.type) {
    case CartActions.TypeKeys.ADD_PRODUCT_TO_CART_SUCCESS:
      newState = addProductToCartHelper(state, action.payload);
      return { ...state, products: newState };
    case CartActions.TypeKeys.REMOVE_POSITION_FROM_CART_SUCCESS:
      newState = removeProductFromCartHelper(state, action.payload, action.removeProduct);
      return { ...state, products: newState };
    case CartActions.TypeKeys.ADD_PRODUCT_TO_CART_FAILURE:
      error = action.payload;
      return { ...state, error };
    case CartActions.TypeKeys.REMOVE_POSITION_FROM_CART_FAILURE:
      error = action.payload;
      return { ...state, error };
    default:
      return state;
  }
};
