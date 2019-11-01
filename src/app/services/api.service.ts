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

  getProduct(id){
    return this.http.get(this.url + "/" + id);
  }

  insertProduct(prodcut) {
    return this.http.post(this.url, prodcut);
  }

  updateProduct(prodcut) {
    return this.http.put(this.url + "/" + prodcut._id, prodcut);
  }

  deleteProduct(prodcutId){
    return this.http.delete(this.url + "/" + prodcutId);
  }
}
