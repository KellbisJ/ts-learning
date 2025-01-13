import { faker } from '@faker-js/faker';

import {
  addProduct,
  products,
  updateProduct,
  findProducts,
} from './products/product.service';
import { ProductInterface } from './products/product.model';

addProduct({
  title: faker.commerce.productDescription(),
  image: faker.image.url(),
  description: faker.commerce.productDescription(),
  stock: faker.number.int({ min: 1, max: 15 }),
  size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
  color: faker.color.human(),
  price: parseInt(faker.commerce.price(), 10),
  isNew: faker.datatype.boolean(),
  tags: faker.helpers.arrayElements(['tag1', 'tag2', 'tag3']),
  categoryId: faker.string.uuid(),
});

console.log(products);
const product = products[0];
updateProduct(product.id, {
  title: 'ESTO ES GENIAL',
  price: 999,
});

findProducts({
  stock: 10,
  color: 'red',
  isNew: true,
});
