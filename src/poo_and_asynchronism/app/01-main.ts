import axios from 'axios';
import { Product } from './models/product.model';

(async () => {
  // async function getProducts(): Promise<Product[]> {
  //   const res = await axios.get('https://api.escuelajs.co/api/v1/products');
  //   return res.data;
  // }

  // async function getProducts() {
  //   const { data } = await axios.get<Product[]>(
  //     'https://api.escuelajs.co/api/v1/products'
  //   );
  //   return data;
  // }

  async function getProducts() {
    const res = await axios.get('https://api.escuelajs.co/api/v1/products');
    const data = res.data as Product[];
    return data;
  }

  const products = await getProducts();
  console.log(products.map((item) => `${item.id} - ${item.title}`));
})();
