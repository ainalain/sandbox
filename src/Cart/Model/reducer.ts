import { CartActions } from './actions';
import {
  CartErrors,
  CartModel, DefaultCartModel,
  ProductInCart, ProductInCartObject,
  RemovePayload,
} from './store';

export const defaultErrorMessage = 'Something went wrong. Please try again later.';

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

  let errors: CartErrors | undefined = state.errors;
  let newState: ProductInCartObject;

  switch (action.type) {
    case CartActions.TypeKeys.ADD_PRODUCT_TO_CART_SUCCESS:
      newState = addProductToCartHelper(state, action.payload);
      return { ...state, products: newState };
    case CartActions.TypeKeys.REMOVE_POSITION_FROM_CART_SUCCESS:
      newState = removeProductFromCartHelper(state, action.payload, action.removeProduct);
      return { ...state, products: newState };
    case CartActions.TypeKeys.ADD_PRODUCT_TO_CART_FAILURE:
      errors = { ...state.errors, [action.payload.name]: action.payload.message };
      return { ...state, errors };
    case CartActions.TypeKeys.REMOVE_POSITION_FROM_CART_FAILURE:
      errors = { ...state.errors, [action.payload.name]: action.payload.message };
      return { ...state, errors };
    default:
      return state;
  }
};
