import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from '../pages/login/loginComponent';
import { LoginService } from '../services/loginService';
import { AuthService } from '../services/authService';
import { routing } from './app.routing';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from '../pages/home/homeComponent';
import { MovieService } from '../services/movieService';
import { SessionService } from '../services/sessionService';
import { sessionComponent } from '../pages/session/sessionComponent';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CheckoutComponent } from '../pages/checkout/checkoutComponent';
import { addRoomsComponent } from '../pages/admin/add-rooms/addRoomsComponent';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    sessionComponent,
    CheckoutComponent,
    addRoomsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    LoginService,
    AuthService,
    MovieService,
    SessionService
  ],
  bootstrap: [AppComponent, 
  LoginComponent,
  HomeComponent,
  sessionComponent,
  CheckoutComponent,
  addRoomsComponent
]
})
export class AppModule { }
