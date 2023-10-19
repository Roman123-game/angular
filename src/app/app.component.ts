import { Component } from '@angular/core';
import { IProduct } from './models/products';
import {products as data}from './data/products'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  product: IProduct[] = data
}
