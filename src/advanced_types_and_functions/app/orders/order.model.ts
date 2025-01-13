import { ProductInterface } from '../products/product.model';
import { BaseModelInterface } from '../base.model';

export interface OrderInterface extends BaseModelInterface {
  products: ProductInterface[];
}
