import { ProductMemoryService } from './services/product_memory.service';

const productService = new ProductMemoryService();

productService.create({
  title: 'productazo',
  price: 333,
  description: 'Un productazo jamas antes visto',
  images: [],
  createdAt: new Date(),
  updatedAt: new Date(),
  categoryId: 1,
});

const products = productService.getAll();
const productId = products[0].id;

console.log(products);

productService.update(productId, {
  title: 'productazozozozo',
});

const res = productService.findOne(productId);
console.log(res);
