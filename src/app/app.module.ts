import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SharedService } from './shared.service';

const firebaseConfig = {
  apiKey: "AIzaSyDUTqhQVzgNghaWYB_u9sPY8o0OAw-20JY",
  authDomain: "todo-a71e9.firebaseapp.com",
  projectId: "todo-a71e9",
  storageBucket: "todo-a71e9.appspot.com",
  messagingSenderId: "545500291001",
  appId: "1:545500291001:web:f24687c3eef393418ba068"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
