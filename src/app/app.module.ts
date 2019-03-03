import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "angularfire2"; //we need this to get the basic Firebase connection up and running
import { AngularFireDatabaseModule } from "angularfire2/database"; //if iyz wabt ti access tge bi.-sql database from Firebase your have to use this module(used to actually save user-data)
import {AngularFireStorageModule } from "angularfire2/storage"; //the storage of the Firebase will be accessed with this one (used to upload pictures)
import {AngularFireAuthModule} from 'angularfire2/auth'; //the authentication functionality will be done with the inbuild Firebase Authentication module

import { environment } from "../environments/environment"; //credentials for Firebase;

//basket for additional components necessary to add extra freatures
import {AuthService} from './shared/auth.service';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactService } from "./shared/contact.service";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ImportantNumbersPageComponent } from './important-numbers-page/important-numbers-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeadyComponent } from './heady/heady.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent,
    NavbarComponent,
    FooterComponent,
    ImportantNumbersPageComponent,
    LandingPageComponent,
    HeadyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig), //we called initializeApp function to provide connection details
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule, //We use this to authenticate the user using the Firebase Authentication Service
    FormsModule
  ],
  providers: [ContactService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
