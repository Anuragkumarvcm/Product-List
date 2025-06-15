import { Component } from '@angular/core';
import { Product } from './model/product.model';
import productsData from './data/products.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'products';
  products: Product[] = [];

  ngOnInit(): void {
    this.products = productsData;
  }

}
