import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

 import { AngularFireStorage } from '@angular/fire/compat/storage';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fs: AngularFirestore , private storage: AngularFireStorage) { }
  
  getproductone(){    
    return this.fs.collection('products', ref => ref.where('category', '==', "one")).snapshotChanges()}
  getAllProducts(){

    return this.fs.collection('products').snapshotChanges()
  }
  getproductwo(){
    
    return this.fs.collection('products', ref => ref.where('category', '==', "two")).snapshotChanges()
  }
  getproducthird(){
    
    return this.fs.collection('products', ref => ref.where('category', '==', "three")).snapshotChanges()
  }
  changeproductbyid(id : any){
    return this.fs.collection(`products/${id}`).snapshotChanges()
  }
  changeprice(id : any, price : any , name : any){
    return this.fs.doc(`products/${id}`).update({price, name})
  }
  deletep(id :any){
    return this.fs.doc(`products/${id}`).delete()
  }

    
  
    addproduct(category:any,  name:any,price:any,amount:any, image:any  ){

  let ref = this.storage.ref("products/" + image.name)
  ref.put(image).then(()=>{
  ref.getDownloadURL().subscribe(img => {
  this.fs.collection('products/').add({
  category,
 name, 
 amount,
 price,

 img,
  
  

  })
  
  
  })
  
  
  })




  }
}
