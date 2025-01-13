import { CategoryInterface } from '../categories/category.model';
import { BaseModelInterface } from '../base.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface ProductInterface extends BaseModelInterface {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color: string;
  price: number;
  category: CategoryInterface;
  isNew: boolean;
  tags: string[];
}
