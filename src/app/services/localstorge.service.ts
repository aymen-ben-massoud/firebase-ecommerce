import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorgeService {

  constructor() { }
  private readonly cart$ = new BehaviorSubject<any[]>(this.getProduct());
 addProduct(product:any ){
  this.cart$.next([...(this.cart$.value || []),product]);
  localStorage.setItem('cart' , JSON.stringify(this.cart$.value));


 
 }
 removeProduct(product : any){
 
  const cart = this.cart$?.value.filter((item)=> item.id !== product.id);
  this.cart$.next(cart);
  localStorage.setItem('cart' , JSON.stringify(cart))

}

getcarTotalPrice(){
  return this.cart$.value.reduce((acc, item)=> acc + item.price * item.amount, 0);

}


 getProduct(){
  return JSON.parse(localStorage.getItem('cart')!)
}
getcart(){
  return this.cart$.getValue();
}

clearCart(){
  this.cart$.next([]);
  localStorage.removeItem('cart');

}
get cartCount(){
  return this.cart$?.value?.length;
  }

getCartObs = () => this.cart$.asObservable();
}
