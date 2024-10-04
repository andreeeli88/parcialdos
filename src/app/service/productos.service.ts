import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }
  private API_PRODUCTO = "http://localhost:3000/productos"
  postProducto(item: any): Observable<any>{
    return this.http.post(this.API_PRODUCTO, item)
  }
  private API_PRODUCTOGET = "http://localhost:3000/productos"
  getProdcuto(): Observable<any>{
    return this.http.get(this.API_PRODUCTOGET)
  }
}
