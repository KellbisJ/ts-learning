import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductInterface } from './product.model';

export interface ProductService {
  getAll(): ProductInterface[] | Promise<ProductInterface[]>;

  create(dto: CreateProductDto): ProductInterface | Promise<ProductInterface>;

  update(
    id: ProductInterface['id'],
    changes: UpdateProductDto
  ): ProductInterface | Promise<ProductInterface>;

  findOne(
    id: ProductInterface['id']
  ): ProductInterface | undefined | Promise<ProductInterface | undefined>;
}
