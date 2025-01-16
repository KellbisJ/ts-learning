import { faker } from '@faker-js/faker';
import { ProductInterface } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductService } from '../models/product_service.model';

export class ProductMemoryService implements ProductService {
  private products: ProductInterface[] = [];

  getAll() {
    return this.products;
  }

  create(data: CreateProductDto): ProductInterface {
    const newProduct = {
      ...data,
      id: faker.number.int(),
      category: {
        name: faker.commerce.department(),
        id: data.categoryId,
        image: faker.image.url(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      },
    };
    return this.add(newProduct);
  }

  add(product: ProductInterface) {
    this.products.push(product);
    return product;
  }

  update(
    id: ProductInterface['id'],
    changes: UpdateProductDto
  ): ProductInterface {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    const prevData = this.products[index];
    const newData = {
      ...prevData,
      ...changes,
    };
    this.products[index] = newData;
    return newData;
  }

  findOne(id: ProductInterface['id']) {
    return this.products.find((item) => item.id === id);
  }
}
