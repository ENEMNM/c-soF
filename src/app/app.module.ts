import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainView } from './app.mainview';
import { AboutView } from '../partials/main.about'

import {
  RouterModule,
  Routes
} from '@angular/router';

const routes:Routes = ([
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainView },
  { path: 'about', component: AboutView },
  //{ path: 'login', component: LoginComponent },
  //{ path: 'dashboard', component: DashboardComponent }
]);

@NgModule({
  declarations: [
    MainView,
    AboutView,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
      //{ enableTracing: true } // debugging purpose only
    )
  ],
  providers: [],
  bootstrap: [
    MainView
  ]
})
export class AppModule { }
