import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Products } from 'src/app/interfaces/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-settingsproducts',
  templateUrl: './settingsproducts.component.html',
  styleUrls: ['./settingsproducts.component.css']
})
export class SettingsproductsComponent implements OnInit {

productlist  : Products[]=  []
 

@ViewChild('image') image?: ElementRef  
  constructor(
    private  PS : ProductsService , private cs : CartService

  ) { }

  ngOnInit(): void {
this.PS.getAllProducts().subscribe((s)=>{
 this.productlist  = s.map((get :any)=>{
return{
  id: get.payload.doc.id,
  ...get.payload.doc.data(),
}

 })
})

  }

changeprice(index : any){
this.PS.changeprice(this.productlist[index].id  , this.productlist[index].price , this.productlist[index].name )
}
deletep(index  : any){
  this.PS.deletep(this.productlist[index].id)
}

addproductform(f: NgForm ){

let name=  (<Products>f.value).name,

 category = (<Products>f.value).category,

 price = (<Products>f.value).price,
 amount = (<Products>f.value).amount,

    image= (<HTMLInputElement>this.image?.nativeElement).files?.[0]
    this.PS.addproduct( category ,name , price, amount,     image )

}




}
