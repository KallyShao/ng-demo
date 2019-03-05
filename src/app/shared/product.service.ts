import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //装饰器的作用是说明其他服务可以注入到该服务的构造函数
})
export class ProductService {

  constructor() { }
  getProduct(): Product {
    return new Product(1, '第一个商品', 9.19, '最新款苹果手机');
  }
}

export class Product {
  constructor (
    public id: number,
    public title: string,
    public price: number,
    public desc:string
  ){}
}