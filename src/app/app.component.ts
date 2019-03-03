import { Component } from '@angular/core';
import {AuthService} from './shared/auth.service'; //the import is needed here so the router-outlet can be showen or not, if the user is logged in

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PhoneBook';

  constructor(public authService: AuthService){}
}


