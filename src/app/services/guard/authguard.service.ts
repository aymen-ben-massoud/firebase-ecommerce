import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthguardService implements CanActivate {
  constructor(private afauth: AngularFireAuth , private router : Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Observable<boolean> | Promise<boolean> {

return new Promise (resolve => {
this.afauth.user.subscribe((user)=>{
if(user) resolve (true);
else this.router.navigate(['/product'])
})})

  }
  
}
