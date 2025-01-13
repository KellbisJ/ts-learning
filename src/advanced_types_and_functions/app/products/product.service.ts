import { faker } from '@faker-js/faker/.';
import { ProductInterface } from './product.model';
import { CreateProductDto } from './product.dto';

export const products: ProductInterface[] = [];

export const addProduct = (data: CreateProductDto) => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      name: faker.commerce.department(),
      id: faker.string.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

// type example = Pick<ProductInterface, 'color' | 'description'>; // Pick to choose parameters
