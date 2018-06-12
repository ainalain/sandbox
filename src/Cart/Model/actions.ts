import { ProductInCart, RemovePayload } from './store';

export namespace CartActions {
  export enum TypeKeys {
    ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
    ADD_PRODUCT_TO_CART_SUCCESS = 'ADD_PRODUCT_TO_CART_SUCCESS',
    ADD_PRODUCT_TO_CART_FAILURE = 'ADD_PRODUCT_TO_CART_FAILURE',

    REMOVE_POSITION_FROM_CART = 'REMOVE_POSITION_FROM_CART',
    REMOVE_POSITION_FROM_CART_SUCCESS = 'REMOVE_POSITION_FROM_CART_SUCCESS',
    REMOVE_POSITION_FROM_CART_FAILURE = 'REMOVE_POSITION_FROM_CART_FAILURE',

    CLEAN_CART = 'CLEAN_CART',
    CLEAN_CART_SUCCESS = 'CLEAN_CART-SUCCESS',
    CLEAN_CART_FAILURE = 'CLEAN_CART_FAILURE',

    OTHER_ACTION = 'OTHER_ACTION.63k272ba-htp5-11e8-ne42-07jof89f531e'
  }

  export interface AddProductToCartAction {
    type: TypeKeys.ADD_PRODUCT_TO_CART;
    payload: string;
  }

  export interface AddProductToCartSuccessAction {
    type: TypeKeys.ADD_PRODUCT_TO_CART_SUCCESS;
    payload: ProductInCart;
    removeProduct?: boolean;
  }

  export interface AddProductToCartFailureAction {
    type: TypeKeys.ADD_PRODUCT_TO_CART_FAILURE;
    payload: Error;
  }

  export interface RemovePositionFromCartAction {
    type: TypeKeys.REMOVE_POSITION_FROM_CART;
    payload: string;
    removeProduct?: boolean;
  }

  export interface RemovePositionFromCartSuccessAction {
    type: TypeKeys.REMOVE_POSITION_FROM_CART_SUCCESS;
    payload: RemovePayload;
    removeProduct?: boolean;
  }

  export interface RemovePositionFromCartFailureAction {
    type: TypeKeys.REMOVE_POSITION_FROM_CART_FAILURE;
    payload: Error;
  }

  export interface CleanCartAction {
    type: TypeKeys.CLEAN_CART;
  }

  export interface CleanCartSuccessAction {
    type: TypeKeys.CLEAN_CART_SUCCESS;
  }

  export interface CleanCartFailureAction {
    type: TypeKeys.CLEAN_CART_FAILURE;
  }

  export interface OtherAction {
    type: TypeKeys.OTHER_ACTION;
  }

  export type ActionTypes =
    AddProductToCartAction
    | AddProductToCartSuccessAction
    | AddProductToCartFailureAction
    | RemovePositionFromCartAction
    | RemovePositionFromCartSuccessAction
    | RemovePositionFromCartFailureAction
    | CleanCartAction
    | CleanCartSuccessAction
    | CleanCartFailureAction
    | OtherAction;

  export const addProductToCart = (id: string ): AddProductToCartAction => ({
    type: TypeKeys.ADD_PRODUCT_TO_CART,
    payload: id
  });

  export const removePositionFromCart = (id: string, removeProduct?: boolean ): RemovePositionFromCartAction => ({
    type: TypeKeys.REMOVE_POSITION_FROM_CART,
    payload: id,
    removeProduct
  });

  export const cleanCart = () => ({
    type: TypeKeys.CLEAN_CART,
  });
}
