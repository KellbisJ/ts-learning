import axios from 'axios';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductInterface } from '../models/product.model';
import { ProductService } from '../models/product_service.model';

export class ProductHttpService implements ProductService {
  private url = 'https://api.escuelajs.co/api/v1/products';

  async getAll() {
    const { data } = await axios.get<ProductInterface[]>(this.url);
    return data;
  }

  async create(dto: CreateProductDto) {
    const { data } = await axios.post(this.url, dto);
    return data;
  }

  async update(id: ProductInterface['id'], changes: UpdateProductDto) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }

  async findOne(id: ProductInterface['id']) {
    const { data } = await axios.get(`${this.url}/${id}`);
    return data;
  }
}
