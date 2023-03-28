import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { Products } from 'src/app/interfaces/products';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { LocalstorgeService } from 'src/app/services/localstorge.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productlist: Products[]=[]
  productlist2: Products[]=[]
  constructor(private api : ApiService  , private  PS : ProductsService , private cs : CartService) { }
add = -1
  ngOnInit(): void {


    
    this.PS.getproductone().subscribe((data : any)=> {
      this.productlist = data.map((element: any)=> {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        }
      })
    })

    this.getcategory()
  }
  addtocart(index  : number){
    this.add = index
      }

//       buy(){
// let selectproducts =  this.productlist[this.add]
// let data = {
//   name: selectproducts.name,
//   img: selectproducts.img,
// amount: selectproducts.amount,
//   price: selectproducts.price
// }
// this.cs.addtocart(data).then(() => this.add = -1)

//       }

getcategory(){
this.PS.getproductwo().subscribe((data : any)=>{
  this.productlist2 = data.map((element:any)=>{
    return {
      id: element.payload.doc.id,
      ...element.payload.doc.data(),
    }
  })
})
}

}
