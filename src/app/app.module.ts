import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import{RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
//import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterComponent } from './crisis-center/crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center/crisis-center-home/crisis-center-home.component';
import { CrisisCenterModule } from './crisis-center.module';


@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    //HeroListComponent,
    PageNotFoundComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HeroesModule,
    CrisisCenterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
