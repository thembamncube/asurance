// import { Route } from '@angular/compiler/src/core';
// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Product } from '../model/product';
// import { AddProductService } from '../services/add-product.service';


// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage {
// products:Product ={

//   name:'',
//   description:'',
//   price:0,
//   imgUrl:'',
 
// };
// id:any;


//   constructor(private productService: AddProductService,
//     private activateRoute:ActivatedRoute,
//     private Router: Route) {}

//     Oninit(){

// //retrieve from firebase

// this.id =this.activateRoute.snapshot.paramMap.get('id');
// if(this.id){
//   this.productService.getItem(this.id).subscribe(res=>{
//     this.products=res;
//   })
// }

//  }

// }
