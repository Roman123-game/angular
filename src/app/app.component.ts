import { Component,OnInit } from '@angular/core';
import { IProduct } from './models/products';
import { ProductService } from './services/products.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular';
  products: IProduct[] = [];
  loading = false;

  constructor(private productsService:ProductService){

  }

  ngOnInit(): void{
    this.loading= true
    this.productsService.getAll().subscribe((products)=>{
      this.products  = products
      this.loading = false
    })

  };
}
