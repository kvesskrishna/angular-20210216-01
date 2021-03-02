import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import products from '../../data/products';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  id: number;
  products = products;
  detail: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.detail = this.products.filter((product) => product.id == this.id)[0];
    console.log(this.detail);
  }
}
