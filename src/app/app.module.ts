import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment.prod';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ProductsService } from './services/products.service';
import { OrdersComponent } from './components/orders/orders.component';
import { SettingsproductsComponent } from './components/settingsproducts/settingsproducts.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { getStorage, provideStorage } from '@angular/fire/storage'; 
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ProductdetailsComponent } from './components/productdetails/productdetails/productdetails.component';
import { FirstCategoryComponent } from './components/first-category/first-category.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { Category1Component } from './components/category1/category1.component';
import { Category2Component } from './components/category2/category2.component';
import { Category3Component } from './components/category3/category3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    LoginComponent,
    ProductsComponent,
 
    
    OrdersComponent,
    SettingsproductsComponent,
    ProductdetailsComponent,
  
    FirstCategoryComponent,
    FooterComponent,
    ContactComponent,
    Category1Component,
    Category2Component,
    Category3Component,
   
  ],
  imports: [
    BrowserModule,
   
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    AngularFireStorageModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
   
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),  
    provideFirestore(() => getFirestore()),
   
  ],

  providers: [
    AngularFirestore,
    ProductsService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
