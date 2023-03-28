import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-first-category',
  templateUrl: './first-category.component.html',
  styleUrls: ['./first-category.component.css']
})
export class FirstCategoryComponent implements OnInit {
getp :  any []= []
  constructor(public ps: ProductsService) { }

  ngOnInit(): void {

this.ps.getAllProducts().subscribe((get : any)=>{
  this.getp = get.map((data : any)=>{
    return {
      id: data.payload.doc.id,
      ...data.payload.doc.data()
    }
  })
})

  }

}
