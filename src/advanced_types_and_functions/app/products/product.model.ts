import { Category } from '../categories/category.model';
import { BaseModelInterface } from '../base.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModelInterface {
  title: string;
  stock: number;
  size?: Sizes;
  categories: Category;
}
