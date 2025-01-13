import { addProduct } from './products/product.service';

addProduct({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 90,
  categories: {
    name: 'Jewelry',
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
});
