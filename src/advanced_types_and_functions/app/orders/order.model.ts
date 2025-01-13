import { Product } from '../products/product.model';
import { BaseModelInterface } from '../base.model';

export interface Order extends BaseModelInterface {
  products: Product[];
}
