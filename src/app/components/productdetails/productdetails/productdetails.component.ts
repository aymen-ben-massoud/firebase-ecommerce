import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Products } from 'src/app/interfaces/products';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ProductsService } from 'src/app/services/products.service';
import { LocalstorgeService } from 'src/app/services/localstorge.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})

export class ProductdetailsComponent implements OnInit {
  getproduct: any = [];
  data: any = [];
  you: any;
  BUY ='BUY'
  buy2= false
  constructor(
    private route: ActivatedRoute,
    private local: LocalstorgeService,
    private prodctservice: ProductsService,
    private fs: AngularFirestore,
    private toastr: ToastrService
  ) {}
  id: any;
  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');


   this.getproductbyid() 
   this.buyit()
  }
getproductbyid(){

  this.fs
  .doc('products/' + this.id)
  .valueChanges()
  .subscribe((val) => {
    this.getproduct = val;
    this.getproduct.id = this.id;
  });
}
  buy() {
    this.local.addProduct(this.getproduct);
    this.toastr.success(' Successfully added', 'Product ');
    if ('cart' in localStorage) {
      this.local.getCartObs().subscribe((test: any) => {
        this.getproduct = test.map((elem: any) => { 
        

          if (elem.id === this.id) {
            console.log('you buy this product ');
            this.BUY = 'Done'
           this.buy2= true
          } else{
            this.BUY = 'BUY'
            this.buy2= false
             
           
          }
        });
      });
    }
    
   this.getproductbyid() 
  
    
  }
buyit(){
 
  if ('cart' in localStorage) {
    this.local.getCartObs().subscribe((test: any) => {
      this.getproduct = test.map((elem: any) => { 
      

        if (elem.id === this.id) {
          console.log('you buy this product ');
          this.BUY = 'DONE'
          this.buy2= true
        } else{
          this.BUY ='BUY'
          this.buy2= false
        }
      });
    });
  }
  
 this.getproductbyid() 
}
  

}
