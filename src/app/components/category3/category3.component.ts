import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category3',
  templateUrl: './category3.component.html',
  styleUrls: ['./category3.component.css']
})
export class Category3Component implements OnInit {
  productlist3: Products[]=[]
  constructor(private  PS : ProductsService) { }

  ngOnInit(): void {

    this.PS.getproducthird().subscribe((data : any)=> {
      this.productlist3 = data.map((element: any)=> {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        }
      })
    })
  }

}
