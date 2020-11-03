import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-str',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isSignedIn = false
    constructor(public firebaseService : FirebaseService,
      public router : Router) { }
  
    ngOnInit() {
      if(localStorage.getItem('user')!== null)
      this.isSignedIn = true
      else
      this.isSignedIn = false
    }
  
    async onSignIn(email :string, password: string){
      await this.firebaseService.signIn(email,password)
      if(this.firebaseService.isLoggedIn)
      this.router.navigate(["home-screen"]);
    }

  handleLogout(){
    this.isSignedIn = true
  }
}
