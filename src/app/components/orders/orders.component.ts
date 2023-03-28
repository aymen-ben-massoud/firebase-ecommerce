import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from '@firebase/util';
import { QuerySnapshot } from 'firebase/firestore';
import { Products } from 'src/app/interfaces/products';
import { Shooping } from 'src/app/interfaces/shooping';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  user: User[] = [];
  order:  any[] =[];
 
  constructor(
    private cs: CartService,
    private fs: AngularFirestore,
    private auths: AuthService
  ) {}

  ngOnInit(): void {
   this.cs.getorders().subscribe((get: any)=>{

this.order = get.map((fetch : any)=>{
 

return {
  id: fetch.payload.doc.id,
  ...fetch.payload.doc.data()

}

})

console.log(this.order.map(any => any.setproduct[0].price));
     } ) }
   


delete(i:any){

  this.cs.deleteproductfromcorder(this.order[i].id)


}


}
