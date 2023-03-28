import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorgeService } from 'src/app/services/localstorge.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

isuser : boolean = false
product: any[]=[]
filtering : boolean = false
search =""
  constructor(public route : Router,   private ps : ProductsService,  private auths : AuthService , private afauth : AngularFireAuth, public local: LocalstorgeService) { }

  ngOnInit(): void {
this.ps.getAllProducts().subscribe((get:any)=>{
   this.product = get.map((data:any)=>{
    return{
      id: data.payload.doc.id,
      ...data.payload.doc.data()
    }
  })
 
})



this.afauth.authState.subscribe(user => {
  if(user){
    this.isuser = true
    this.auths.userid = user.uid
  }else {
    this.isuser = false
    this.auths.userid = ''
  }
})

  }
 

  logout(){
this.auths.logout().then(() =>console.log('logout'))
}
filter(){
  this.filtering  = true
}
out(){
  this.filtering  = false
}

}
