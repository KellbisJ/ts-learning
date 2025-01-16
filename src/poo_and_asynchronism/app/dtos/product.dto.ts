import { ProductInterface } from './../models/product.model';
import { CategoryInterface } from './../models/category.model';

export interface CreateProductDto
  extends Omit<ProductInterface, 'id' | 'category'> {
  categoryId: CategoryInterface['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}
