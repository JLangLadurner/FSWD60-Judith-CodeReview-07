import { Injectable } from '@angular/core';
import { FormControl , FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public firebase: AngularFireDatabase) { }
  contactList: AngularFireList<any>;

	  	form = new FormGroup({
	  		$key: new FormControl(null),
			firstName: new FormControl('', Validators.required),
	     	lastName: new FormControl(''),
	     	email: new FormControl('', Validators.email),
	     	phoneNum: new FormControl('', [Validators.required, Validators.minLength(8)]),
	     	category: new FormControl('private')

	         });

	  	 getContact(){
                 this.contactList = this.firebase.list('contacts');
                 return this.contactList.snapshotChanges();
         }
         insertContact(ContactItem){
                 this.contactList.push({
                         firstName: ContactItem.firstName,
                         lastName: ContactItem.lastName,
                         email: ContactItem.email,
                         phoneNum: ContactItem.phoneNum,
                         category: ContactItem.category
                  });
         }
}
