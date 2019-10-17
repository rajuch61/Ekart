import { HttpClient } from '@angular/common/http';
import { APIService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];
  private url = 'http://10.109.68.29:3000/products';
  constructor(private api: APIService, private http: HttpClient) { }

  ngOnInit() {
    this.api.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }

  createPrdouct(prdouctName: HTMLInputElement) {
    const product = {
      id: this.products.length + 1,
      name: prdouctName.value
    };
    this.api.insertProduct(product).subscribe(data => {
      console.log(data);
    });
    this.products.splice(0, 0, product);
  }
}
