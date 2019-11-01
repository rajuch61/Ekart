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
  product: any = {};
  constructor(private api: APIService, private router: Router, private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get('id');
    if(id) this.api.getProduct(id).subscribe(p => {
      this.product = p;
      console.log(this.product);
    })
  }

  ngOnInit() {
  }
  save(product){
    if(this.product._id){
      this.api.updateProduct(this.product).subscribe(data =>{
        console.log('Product Updated');
      })
    }
    else this.api.insertProduct(product).subscribe(data => {
      console.log('Insert Product Success');
    });
    this.router.navigate(['/admin/products']);
  }

  delete(){
    if(!confirm('Are you sure you want to delete the product')) return;
    this.api.deleteProduct(this.product._id).subscribe(data =>{
      console.log('Product deleted');
    })
    this.router.navigate(['/admin/products']);
  }
}
