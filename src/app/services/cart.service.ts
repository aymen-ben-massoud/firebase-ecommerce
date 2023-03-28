import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'firebase/auth';
import { Products } from '../interfaces/products';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs : AngularFirestore ,  private auths: AuthService) { }


  addtocart(data : Products){
    return this.fs.collection('orders').add(data)
  }
  getcart(){
    return this.fs.collection('orders').snapshotChanges()
  }

  deleteproductfromcorder(id:any){
    return this.fs.doc(`orders/${id}`).delete()
  }
  // save(id : any, amount : any){
  //   return this.fs.doc(`orders/${id}`).update({amount})
  // }
  pushorders(data:any ){
    return this.fs.collection( 'orders').add(data )
  }

 
  getorders(){
    return this.fs.collection('orders').snapshotChanges()
  }


  getuser(){
    return this.fs.collection('orders').doc().get()
  }
}
