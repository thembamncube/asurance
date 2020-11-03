import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import{Product} from './../model/product'
import {map, take} from 'rxjs/operators';

import{AngularFirestoreCollection,AngularFirestore,DocumentReference} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class AddProductService {
// create space for products in firebase
  private items: Observable<Product[]>;
  private collectionName: AngularFirestoreCollection<Product>;




  constructor(private afs: AngularFirestore) {
//set product 
    this.collectionName = this.afs.collection<Product>('images');
    this.items = this.collectionName.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
    );
   }
   getItes(): Observable<Product[]> {
    return this.items;
  }

  getItem(id: string): Observable<Product> {
    return this.collectionName.doc<Product>(id).valueChanges().pipe(
        take(1),
        map(item => {
          item.id = id;
          return item;
        })
    );
  }

  addItem(item: Product): Promise<DocumentReference> {
    return this.collectionName.add(item);
  //  this.cartItemCount.next(this.cartItemCount.value + 1)
  }
}
