import { Observable} from "rxjs";
import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { IProduct } from "../models/products";


@Injectable({
providedIn: 'root'
})

export class ProductService{
constructor(private http: HttpClient){

}
getAll(): Observable<IProduct[]>{
 return this.http.get<IProduct[]>('https://fakestoreapi.com/products')
}
}