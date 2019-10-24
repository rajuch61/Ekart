import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { async } from 'q';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$;
  product;
  constructor(private apiService: APIService) {
    this.products$ = this.apiService.getProducts();
  }

  ngOnInit() {
  }

}
