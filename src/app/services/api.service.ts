import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {  }
  getProducts() {
    return this.http.get(this.url);
  }
  insertProduct(prodcut) {
    return this.http.post(this.url, prodcut);
  }
}
