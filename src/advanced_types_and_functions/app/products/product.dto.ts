import { ProductInterface } from './product.model';

// Omit structure to omit parameters
export interface CreateProductDto
  extends Omit<
    ProductInterface,
    'id' | 'createdAt' | 'updatedAt' | 'category'
  > {
  categoryId: string;
}

// The opposite of Omit // type example = Pick<ProductInterface, 'color' | 'description'>; // Pick to choose parameters

export interface UpdateProductDto extends Partial<CreateProductDto> {}

// The opposite of Partial type example2 = Required<ProductInterface>; // All parameters are required

export interface FindProductDto extends Readonly<Partial<ProductInterface>> {} // Readonly type
