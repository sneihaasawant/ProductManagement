import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductService {
  productList = [];
  
  constructor(private _http: Http) { }

  createProduct(product) {
    this.productList.push(product);
  }

  getproductlist() {
    return this.productList;
  }

}
