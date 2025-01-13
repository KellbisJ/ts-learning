import { faker } from '@faker-js/faker/.';
import { ProductInterface } from './product.model';
import { CreateProductDto } from './product.dto';
import { UpdateProductDto } from './product.dto';

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

export const updateProduct = (
  id: string,
  changes: UpdateProductDto
): ProductInterface => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  const newData = {
    ...prevData,
    ...changes,
  };
  return newData;
};
