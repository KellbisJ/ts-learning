import { CategoryInterface } from './category.model';

export interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
  category: CategoryInterface;
}
