import { Injectable } from '@angular/core';
import { collection, Firestore, collectionData, addDoc, doc, deleteDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private fs:Firestore) { }

  getNotes(){
    let notesCollection = collection(this.fs,'notes');
    return collectionData(notesCollection,{idField:'id'});
  }
  addNotes(desc:string){
    let data = {description:desc};
    let notesCollection = collection(this.fs,'notes');
    return addDoc(notesCollection,data);
  }
  deleteNotes(id:string){
    let docRef =  doc(this.fs,'notes/' + id);
    return deleteDoc(docRef);
  }
}
