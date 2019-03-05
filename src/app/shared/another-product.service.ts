import { Injectable } from '@angular/core';
import { ProductService, Product } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class AnotherProductService implements ProductService{

  constructor() { }
  getProduct(): Product {
    return new Product(2, '三星', 4919, '最新款三星手机');
  }
}
