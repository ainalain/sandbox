import { ProductModel } from '../Bakery/Model/store';
import { CartModel } from '../Cart/Model/store';

export namespace Model {
  export interface Root {
    product: ProductModel;

    router: Router;

    cart: CartModel;
  }

  export interface Router {}
}
