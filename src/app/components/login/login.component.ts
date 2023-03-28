import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { collectionGroup } from 'firebase/firestore';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private af : AuthService , private route : Router  ) { }

  ngOnInit(): void {
  }


  login(f : any){
let data = f.value
this.af.login(data.email , data.password).then(()=>  this.route.navigate(['/orders']))
.catch(err => console.log('err'))

  }
}

