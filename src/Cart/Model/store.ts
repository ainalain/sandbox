export interface RemovePayload {
  id: string;
  removeProduct?: boolean;

}

/* an interface of a product entity that had been added to a shopping cart */
export interface ProductInCart {
  id: string;
  amount: number;
  name: string;
  label?: string;
}

export enum ErrorsEnum {
  NetworkError = 'NetworkError',
  ServerError = 'ServerError',
  FormValidationError = 'FormValidationError',
  UnknownError = 'UnknownError'
}

export type CartErrors = Partial<Record<ErrorsEnum, string>>;

/* a model that is responsible for the current state
 * of shopping cart business logic
 */
export class CartModel {
  products: Record<string, ProductInCart> = {};
  errors?: CartErrors;
}

export type ProductInCartObject = Record<string, ProductInCart>;

export const DefaultCartModel: CartModel = {
  products: {},
  errors: undefined,
};
