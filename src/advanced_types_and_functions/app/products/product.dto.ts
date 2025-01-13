import { ProductInterface } from './product.model';

// Omit structure to omit parameters
export interface CreateProductDto
  extends Omit<
    ProductInterface,
    'id' | 'createdAt' | 'updatedAt' | 'category'
  > {
  categoryId: string;
}
