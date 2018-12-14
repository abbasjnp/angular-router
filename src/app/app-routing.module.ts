import { NgModule } from '@angular/core';
// { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes : Routes =[
  {path:'heroes', component:HeroListComponent},
  {path:'crisis',component:CrisisListComponent},
  {path:'', redirectTo:'/heroes',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
 // declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
    //CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
