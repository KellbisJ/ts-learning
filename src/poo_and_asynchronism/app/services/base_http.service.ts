import axios from 'axios';
import { CategoryInterface } from './../models/category.model';
import { ProductInterface } from './../models/product.model';
import { UpdateProductDto } from '../dtos/product.dto';

export class BaseHttpService<T> {
  // data: T[] = []

  constructor(protected url: string) {}

  async getAll() {
    const { data } = await axios.get<T[]>(this.url);
    return data;
  }
  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

// const service = new BaseHttpService<string>()
// service.getAll()

// const service2 = new BaseHttpService<CategoryInterface>();
// service2.getAll();

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const url2 = 'https://api.escuelajs.co/api/v1/categories';

  const productsService = new BaseHttpService<ProductInterface>(url1);

  const res = await productsService.getAll();
  console.log('products', res.length);
  productsService.update<ProductInterface['id'], UpdateProductDto>(1, {
    title: 'asd',
  });

  const categoryService = new BaseHttpService<CategoryInterface>(url2);

  const res2 = await categoryService.getAll();
  console.log('categories', res2.length);
})();
