import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.css']
})
export class Category1Component implements OnInit {
  productlist: Products[]=[]
  constructor(private  PS : ProductsService) { }

  ngOnInit(): void {



    this.PS.getproductone().subscribe((data : any)=> {
      this.productlist = data.map((element: any)=> {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        }
      })
    })



  }

}
