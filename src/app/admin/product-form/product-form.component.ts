import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
// import 'rxjs/add/operator/take'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product = {};
  constructor(private api: APIService, private router: Router, private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get('id');
    if(id) this.api.getProduct(id).subscribe(p => {
      this.product = p;
      // console.log(p);
    })
  }

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
