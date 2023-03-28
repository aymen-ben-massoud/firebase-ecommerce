import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { Category1Component } from './components/category1/category1.component';
import { Category2Component } from './components/category2/category2.component';
import { Category3Component } from './components/category3/category3.component';
import { ContactComponent } from './components/contact/contact.component';
import { FirstCategoryComponent } from './components/first-category/first-category.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails/productdetails.component';
import { ProductsComponent } from './components/products/products.component';

import { SettingsproductsComponent } from './components/settingsproducts/settingsproducts.component';
import { AuthguardService } from './services/guard/authguard.service';

const routes: Routes = [
  {path: '' , redirectTo:'product', pathMatch: 'full'},
{path: 'product', component:ProductsComponent},
{path: 'cart', component:CartComponent},
{path: 'first', component:FirstCategoryComponent},
{path: 'admin', component:LoginComponent},
{path: 'details/:id', component:ProductdetailsComponent},
{path: 'contact', component:ContactComponent},
{path: 'category1', component:Category1Component},
{path: 'category2', component:Category2Component},
{path: 'category3', component:Category3Component},
{path: 'orders', component:OrdersComponent   , canActivate :[AuthguardService]},
{path: 'settings', component:SettingsproductsComponent , canActivate :[AuthguardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
