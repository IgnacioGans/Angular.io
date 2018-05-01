import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { RoutingExampleComponent } from './routing-example/routing-example.component';
import { RoutingSample01Component } from './routing-example/routing-sample01/routing-sample01.component';
import { FirstPage01Component } from './routing-example/routing-sample01/first-page01/first-page01.component';
import { SecondPage02Component } from './routing-example/routing-sample01/second-page02/second-page02.component';

const appRoutes =[
  {path: 'app-first-page', component: FirstPageComponent},
  {path: 'app-second-page', component: SecondPageComponent},
  {path: 'app-first-page01', component: FirstPage01Component},
  {path: 'app-second-page02', component: SecondPage02Component},
  {path: '',   redirectTo: '/app-first-page01', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    RoutingExampleComponent,
    RoutingSample01Component,
    FirstPage01Component,
    SecondPage02Component
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true  }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
