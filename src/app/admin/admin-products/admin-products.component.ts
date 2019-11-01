import { Component, OnInit, OnDestroy } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
// import { async } from 'q';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: any = [];
  filteredProducts: any = [];
  subscription: Subscription;

  constructor(private apiService: APIService) {
    this.subscription = this.apiService.getProducts().subscribe(data =>{
      this.products = this.filteredProducts = data;
    })
  }

  ngOnInit() {
  }
  
  filterp(query){
    this.filteredProducts = (query) ?
    this.products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) :
    this.products
  }

  ngOnDestroy(){
    this.subscription.unsubscribe;
  }
}
