import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';
import { AddProductService } from '../../services/add-product.service';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.page.html',
  styleUrls: ['./home-screen.page.scss'],
})
export class HomeScreenPage implements OnInit {
  products:Product ={

    name:'',
    description:'',
    price:0,
    imgUrl:'',
   
  };
  id:any;
  
constructor(private productService: AddProductService,
    private activateRoute:ActivatedRoute,
    private Router: Route) {}

  ngOnInit() {

    //retrieve from firebase

this.id =this.activateRoute.snapshot.paramMap.get('id');
if(this.id){
  this.productService.getItem(this.id).subscribe(res=>{
    this.products=res;
  })
}

   }

}
