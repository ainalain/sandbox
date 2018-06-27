export interface Product {
      id: string;
      name: string;
      price: string;
      description: string;
      author: string;
      authorLink: string;
    }

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type ProductPhotoProps = Omit<Product, 'name' | 'description'>;

export const DefaultProductModel: Product = {
  id: '',
  name: '',
  price: '',
  description: '',
  author: '',
  authorLink: '',
};

export interface Ingredient {
  name: string;
  qty: string | number;
}

export interface Details {
  ingredients: Array<Ingredient>;
}

export class ProductModel {
  products: Array<Product> = [];
  product?: Product = undefined;
  error?: Error = undefined;
  details?: Details;
}
