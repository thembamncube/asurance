import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { AddProductService } from 'src/app/services/add-product.service';
import { Router } from '@angular/router';

//fb
import firebase from 'firebase/app';
import 'firebase/firestore';
//require('firebase/firestore');



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {


// selectedfile:any =null;
// imgUrl:string='assets/Placeholder.jpg';
// // form group with form fields inside
// formTemplate = new FormGroup({})
// //form feilds
// description = new FormControl('')

products: Product= {
  name: '',
  imgUrl: '',
  price: 0,
  description: ''
};


selectedFile: File = null;
upLoadedFile: any;
itemForm: FormGroup;
constructor( private fb: FormBuilder,
  private itemService: AddProductService,
  private router: Router) {}



  ngOnInit() {
    this.loadProduct();
  }
  loadProduct() {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      imgUrl: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
//   preview(event:any){
//     if(event.target.files && event.target.files[0]){
//       const reader = new FileReader();
//       reader.onload=(e:any)=>this.imgUrl =e.target.result;
// reader.readAsDataURL(event.target.files[0]);
// this.selectedfile =event.target. files[0];
//     }
// else{
//   this.imgUrl='assets/Placeholder.jpg' ;
//    this.selectedfile=null; 
// }
  //}

  onFileSelected(event) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadstart = (p) => {
      console.log(p);
    };
    reader.onloadend = (e) => {
      console.log(e.target);
      this.upLoadedFile = reader.result;
      this.itemForm.get('imgUrl').setValue(this.upLoadedFile);
      //console.log(this.upLoadedFile);
    };


}

create_Product(){
  if(this.itemForm.valid){
    this.itemService.addItem(this.itemForm.value).then(() => {
      this.router.navigateByUrl('/');
    })
  }
    if(this.itemForm.valid){
     firebase.firestore().collection('products').add(this.products).then(res => {
       console.log(res)
       this.itemForm.reset();
     })
   }
 }
}