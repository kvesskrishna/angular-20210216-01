import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  total: number = 0;
  itemCount: number = 0;
  constructor(private product: ProductService) {}
  products: any = this.product.products;

  ngOnInit(): void {
    console.log(this.products);
    this.total = this.getCartTotal();
  }

  getCartTotal(products = this.products): number {
    // this.total = 0;
    this.itemCount = 0;
    let total: number = 0;
    console.log(products);
    // this.products.map(product=>product.quantity*product.price)
    products.forEach((product) => {
      let subtotal = product.quantity * product.price;
      if (product.quantity > 0) this.itemCount++;
      // total = total + subtotal;
      total += subtotal;
    });
    console.log(total);
    return total;
  }

  updateQuantity(e) {
    console.log(e);
    let p = [];
    this.products.forEach((product) => {
      if (e.id == product.id) {
        e.action == 'add' ? product.quantity++ : product.quantity--;
      }
      p.push(product);
    });
    console.log(p);
    this.total = this.getCartTotal(p);
    // this.products = p;
  }
}
