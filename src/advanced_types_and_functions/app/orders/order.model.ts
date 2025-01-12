import { Product } from '../products/product.model';

export interface Order {
  id: string | number;
  createAt: Date;
  products: Product[];
}
