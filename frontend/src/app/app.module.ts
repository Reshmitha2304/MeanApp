import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms"
import{ HttpModule } from "@angular/http"

import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { FirstComponent } from './first/first.component';
import { ProfComponent } from './prof/prof.component';
 
var routes:Routes=[
  { path:'',component:HomeComponent },
  { path:'login',component:LoginComponent },
  { path:'register',component:RegisterComponent },
  { path:'about',component:AboutComponent },
  { path:'profile',component:ProfComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    FirstComponent,
    ProfComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
