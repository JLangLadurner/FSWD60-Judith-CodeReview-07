import { Component, OnInit } from '@angular/core';
import {AuthService} from './../shared/auth.service';
import {Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	public projectName:string;
	currentUrl: string;



  constructor(public authService:AuthService,
  	private router: Router) { 
  	router.events.subscribe((_:NavigationEnd) => this.currentUrl = this.router.url);
  }


  ngOnInit() {
  }

  logout(){this.authService.logout();}

}
