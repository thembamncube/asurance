import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  isSignedIn = false
    constructor(public firebaseService : FirebaseService,
      public router : Router) { }

   ngOnInit() {
      if(localStorage.getItem('user')!== null)
      this.isSignedIn = true
      else
      this.isSignedIn = false
    }


 async onSignUp(email :string, password: string){
      await this.firebaseService.signUp(email,password)
      if(this.firebaseService.isLoggedIn)
      this.router.navigate(["login"]);
    }






  

}
