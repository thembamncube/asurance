import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule,
  AngularFireModule.initializeApp({
    apiKey: "AIzaSyAGxYBrpKoVrMwHme2QxB4slNXj58aGseE",
    authDomain: "hotels-6e534.firebaseapp.com",
    databaseURL: "https://hotels-6e534.firebaseio.com",
    projectId: "hotels-6e534",
    storageBucket: "hotels-6e534.appspot.com",
    messagingSenderId: "207405003427",
    appId: "1:207405003427:web:078c18ba73a1bd54640516"
  }), ],

  providers: [
    FirebaseService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],


  
  bootstrap: [AppComponent]
})
export class AppModule {}
