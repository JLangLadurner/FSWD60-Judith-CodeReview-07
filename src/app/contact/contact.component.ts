import { Component, OnInit } from '@angular/core';
import { ContactService } from "../shared/contact.service";


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService:ContactService) { }
  submitted:boolean;
  formControls = this.contactService.form.controls;
  showSuccessMessage: boolean;

  ngOnInit() {
  }

  onSubmit(){

  		this.submitted = true;
     if(this.contactService.form.valid){
           if(this.contactService.form.get("$key").value == null ){ this.contactService.insertContact(this.contactService.form.value);
             this.showSuccessMessage =true;// we set the property to true
             setTimeout(()=> this.showSuccessMessage=false,3000); // we used setTimeout here so after 3 second the showSuccessMessage value will be false
             this.submitted = false;
             this.contactService.form.reset();// the form will be empty after new record created
         } else {this.contactService.updateContact(this.contactService.form.value);
      this.showSuccessMessage = true;
     setTimeout(()=> this.showSuccessMessage=false,3000);
     this.submitted = false;
     this.contactService.form.reset();
		 }
  		}
}
