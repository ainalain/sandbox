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

/* TODO: these all custom errors are created as examples of using enum in Record type
class UnknownError extends Error {
  constructor(message: string) {
    super(message);
    this.name = ErrorsEnum.UnknownError;
  }
}

class ServerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = ErrorsEnum.ServerError;
  }
}

class FormValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = ErrorsEnum.FormValidationError;
  }
}
*/

export enum ErrorsEnum {
  NetworkError = 'NetworkError',
  ServerError = 'ServerError',
  FormValidationError = 'FormValidationError',
  UnknownError = 'UnknownError'
}

export type CartErrors = Partial<Record<ErrorsEnum, string>>;

export class CartModel {
  products: Record<string, ProductInCart> = {};
  errors?: CartErrors;
}

export type ProductInCartObject = Record<string, ProductInCart>;

export const DefaultCartModel: CartModel = {
  products: {},
  errors: undefined,
};
