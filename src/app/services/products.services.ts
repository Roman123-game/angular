import { Observable,catchError,delay,retry, throwError} from "rxjs";
import {Injectable} from '@angular/core'
import {HttpClient,HttpErrorResponse,HttpParams} from '@angular/common/http'
import { IProduct } from "../models/products";
import { ErrorService } from "./error.service";

@Injectable({
providedIn: 'root'
})

export class ProductService{
constructor(
  private http: HttpClient,
  private errorService:ErrorService
  ){

}
getAll(): Observable<IProduct[]>{
 return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
  params: new HttpParams({
    fromObject:{limit:5}
  })
 }).pipe(
  retry(2),
  delay(2000),
  catchError(this.errorHandler.bind(this))

  )
}

private errorHandler(error:HttpErrorResponse){
  this.errorService.handle(error.message)
return throwError(()=>error.message)
}

}

