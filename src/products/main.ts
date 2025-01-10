import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'Satisfyer',
  createAt: new Date(),
  stock: 2,
});
addProduct({
  title: 'Satisfyer',
  createAt: new Date(),
  stock: 7,
  size: 'XL',
});

console.log(products);
const total = calcStock();
console.log(total);
