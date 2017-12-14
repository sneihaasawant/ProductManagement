import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productList = [];

  constructor(private _ProductService: ProductService) { }

  ngOnInit() {
    this.productList = this._ProductService.getproductlist();
  }

  onDelete(idx) {
    console.log('inside delete');
    console.log(idx);
    this.productList.splice(idx, 1);
  }

}
