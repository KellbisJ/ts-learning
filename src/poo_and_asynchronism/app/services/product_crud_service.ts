import { BaseHttpService } from './base_http.service';
import { ProductInterface } from '../models/product.model';
import { UpdateProductDto } from '../dtos/product.dto';
import { ProductHttpService } from './product_http2.service';

export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/categories';
  private http = new ProductHttpService(this.url);

  async update(id: Product['id'], dto: UpdateProductDto) {
    // permissions
    // authorizations
    // logic
    // code
    this.http.anotherRequest();
    return this.http.update(id, dto);
  }
}
