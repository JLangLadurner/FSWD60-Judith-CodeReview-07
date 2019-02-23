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
                 this.contactList = this.firebase.list('contact');
                 return this.contactList.snapshotChanges();
         }
         insertContact(contactList){
                 this.contactList.push({
                         firstName: contactList.firstName,
                         lastName: contactList.lastName,
                         email: contactList.email,
                         phoneNum: contactList.phoneNum,
                         category: contactList.category
                  });
         }

         populateForm(contact){
                this.form.setValue(contact);
        }

        updateContact(contact){
          this.contactList.update(contact.$key,{
            firstName:contact.firstName,
            lastName:contact.lastName,
            email: contact.email,
            phoneNum: contact.phoneNum,
            category: contact.category
          });
        }

        deleteContact($key:string){
          this.contactList.remove($key);
        }
}
