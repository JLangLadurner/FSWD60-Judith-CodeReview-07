import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {ImportantNumbersPageComponent} from './important-numbers-page/important-numbers-page.component';
import {LandingPageComponent} from './landing-page/landing-page.component';


const routes: Routes = [

{
	path:"", component: LandingPageComponent
},

{
	path:"important-numbers-page", component: ImportantNumbersPageComponent
},
{
	path:"contact", component: ContactComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
