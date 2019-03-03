import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app'; //the user login is handled in here
import {Observable} from 'rxjs'; //this is need to use the observable feature



@Injectable({
  providedIn: 'root'
})
export class AuthService {
	user: Observable<firebase.User>; //this is the varialbe carrying the information for if authenticated, or not
 

  constructor (private firebaseAuth: AngularFireAuth)  {
   this.user = firebaseAuth.authState; 
 }
 //calling the sign-up function from firebase
 login(email:string, password: string){
 	this.firebaseAuth
 		.auth
 		.createUserWithEmailAndPassword(email, password) //email and password will be send to firebase for creating a new user
 		.then(value => {
 			console.log("login User created", value);

 		})
 		.catch (err => {
 			console.log('Signup went wrong:',err.message);
 		});
 }

 //calling the inbuild logout function from firebase
 logout(){
 	this.firebaseAuth
 		.auth
 		.signOut();
 }
 
  
  	
 }

