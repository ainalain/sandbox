export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  author: string;
  authorLink: string;
}

export const DefaultProductModel: Product = {
  id: '',
  name: '',
  price: '',
  description: '',
  author: '',
  authorLink: '',
};

export class ProductModel {
  products: Array<Product> = [];
  product?: Product = undefined;
  error?: Error = undefined;
  details?: Details;
}

export interface Ingredient {
  name: string;
  qty?: string | number;
}

export interface Details {
  ingredients: Array<Ingredient>;
}
