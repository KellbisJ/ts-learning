import { ProductInterface } from './product.model';

export const products: ProductInterface[] = [];

export const addProduct = (data: ProductInterface) => {
  // data.id = 'sdfsdf' // no
  products.push(data);
};
