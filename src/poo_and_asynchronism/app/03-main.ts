import { ProductHttpService } from './services/product_http.service';

(async () => {
  try {
    const productService = new ProductHttpService();

    console.log('--'.repeat(10));
    console.log('getAll');
    const products = await productService.getAll();
    console.log(products.length);
    console.log(products.map((item) => item.price));

    const productId = products[0].id;
    console.log('--'.repeat(10));
    console.log('update');
    await productService.update(productId, {
      price: 1,
      title: 'new title',
      description: 'new description',
    });
    console.log('--'.repeat(10));
    console.log('findOne');
    const product = await productService.findOne(productId);
    console.log(product);
  } catch (err) {
    console.error(err);
  }
})();
