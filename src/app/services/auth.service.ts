import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';


import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root',
})
export class AuthService {

// user: Observable <firebase.User> 
userid : string = ''
  constructor(private afauth: AngularFireAuth) {  
      // this.user = this.afauth.user

  }
 
  signup(email: any, password: any) {
    return this.afauth.createUserWithEmailAndPassword(email, password);
  }
  login(email: any, password: any) {
    return this.afauth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afauth.signOut()
  }
}
