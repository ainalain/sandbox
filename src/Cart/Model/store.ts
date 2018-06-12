export interface RemovePayload {
  id: string;
  removeProduct?: boolean;

}
export interface ProductInCart {
  id: string;
  amount: number;
  name: string;
  label?: string;
}

export type ProductInCartObject = Record<string, ProductInCart>;

export class CartModel {
  products: Record<string, ProductInCart> = {};
  error?: Error = undefined;
}

export const DefaultCartModel: CartModel = {
  products: {},
  error: undefined,
};
