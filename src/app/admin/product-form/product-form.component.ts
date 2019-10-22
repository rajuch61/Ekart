import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private api: APIService, private router: Router) { }

  ngOnInit() {
  }
  save(product){
    // console.log(product);
    this.api.insertProduct(product).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/admin/products']);
  }
}
