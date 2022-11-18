import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from 'firebase.config';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    AngularFirestoreModule, 
    AngularFireModule.initializeApp(firebaseConfig), 
  ]
})
export class FirestoreModule { }
