import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category2',
  templateUrl: './category2.component.html',
  styleUrls: ['./category2.component.css']
})
export class Category2Component implements OnInit {
  productlist1: Products[]=[]
  constructor( private  PS : ProductsService) { }

  ngOnInit(): void {
    this.PS.getproductwo().subscribe((data : any)=> {
      this.productlist1 = data.map((element: any)=> {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        }
      })
    })

  }

}
