import { ProductActions } from '../actions/actions';
import { DefaultProductModel, ProductModel } from '../store';

const ingredients = [
    {
      name: 'egg',
      qty: 4,
    },
    {
      name: 'sugar',
      qty: '100 grams',
    },
    {
      name: 'mascarpone cheese',
      qty: '500 grams',
    },
    {
      name: 'lady fingers (Savoiardi)',
      qty: '250 grams',
    },
    {
      qty: '350 milliliters',
      name: 'coffee',
    },
    {
      name: 'sweet wine, rum, liqueur, brandy, or cognac',
      qty: '1 spoon',
    },
    {
      name: 'cocoa',
    },
  ];

export const productReducer = (
  state: ProductModel = {
    product: undefined,
    error: undefined,
    products: [],
    details: {
      ingredients,
    },
  },
  action: ProductActions.ActionTypes): ProductModel => {

  switch (action.type) {
    case ProductActions.TypeKeys.GET_PRODUCT_BY_ID_SUCCESS:
      const product = action.payload;

      return { ...state, error: undefined, product };
    case ProductActions.TypeKeys.GET_PRODUCT_BY_ID_FAILURE:
      const error = action.payload;
      return { ...state, product: DefaultProductModel, error };
    case ProductActions.TypeKeys.GET_ALL_PRODUCTS_SUCCESS:
      const products = action.payload;
      return { ...state, error: undefined, products };
    case ProductActions.TypeKeys.GET_ALL_PRODUCTS_FAILURE:
      const error2 = action.payload;
      return { ...state, error: error2 };
    default:
      return state;
  }
};
