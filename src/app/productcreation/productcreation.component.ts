import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcreation',
  templateUrl: './productcreation.component.html',
  styleUrls: ['./productcreation.component.css']
})
export class ProductcreationComponent implements OnInit {
  productList = [];
  product = new Product;

  constructor(private _ProductService: ProductService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('I am inside submit');
    console.log(this.product);
    this._ProductService.createProduct(this.product);
    this.product = new Product;
    this._router.navigate(['/products']);
  }

}
