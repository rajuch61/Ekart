import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { APIService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { NotAuthorisedComponent } from './not-authorised/not-authorised.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BsNavbarComponent,
    HomeComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    RegisterComponent,
    NotAuthorisedComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },

      { path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuard] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
      { path: 'order-sucess', component: OrderSuccessComponent, canActivate: [AuthGuard] },

      { path: 'admin/products', component: AdminProductsComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AdminAuthGuard]}
    ])
  ],
  providers: [APIService, AuthService, AuthGuard, AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
