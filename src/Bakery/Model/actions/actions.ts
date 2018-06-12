import { Product } from '../store';

export namespace ProductActions {
  export enum TypeKeys {
    GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID',
    GET_PRODUCT_BY_ID_SUCCESS = 'GET_PRODUCT_BY_ID_SUCCESS',
    GET_PRODUCT_BY_ID_FAILURE = 'GET_PRODUCT_BY_ID_FAILURE',

    GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS',
    GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS',
    GET_ALL_PRODUCTS_FAILURE = 'GET_ALL_PRODUCTS_FAILURE',

    OTHER_ACTION = 'OTHER_ACTION.63f662ba-161f-11e8-b642-0ed5f89f718b'
  }

  export interface GetProductByIdAction {
    type: TypeKeys.GET_PRODUCT_BY_ID;
    payload: string;
  }

  export interface GetProductByIdSuccessAction {
    type: TypeKeys.GET_PRODUCT_BY_ID_SUCCESS;
    payload: Product;
  }

  export interface GetProductByIdFailureAction {
    type: TypeKeys.GET_PRODUCT_BY_ID_FAILURE;
    payload: Error;
  }

  export interface GetAllProductsAction {
    type: TypeKeys.GET_ALL_PRODUCTS;
  }

  export interface GetAllProductsSuccessAction {
    type: TypeKeys.GET_ALL_PRODUCTS_SUCCESS;
    payload: Array<Product>;
  }

  export interface GetAllProductsFailureAction {
    type: TypeKeys.GET_ALL_PRODUCTS_FAILURE;
    payload: Error;
  }

  export interface OtherAction {
    type: TypeKeys.OTHER_ACTION;
  }

  export type ActionTypes =
    GetProductByIdAction
    | GetProductByIdSuccessAction
    | GetProductByIdFailureAction
    | GetAllProductsAction
    | GetAllProductsSuccessAction
    | GetAllProductsFailureAction
    | OtherAction;

  export const getProductById = (id: string ): GetProductByIdAction => ({
    type: TypeKeys.GET_PRODUCT_BY_ID,
    payload: id
  });

  export const getAllProducts = ( ): GetAllProductsAction => ({
    type: TypeKeys.GET_ALL_PRODUCTS,
  });
}
