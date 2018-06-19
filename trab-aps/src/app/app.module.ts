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
import { TicketsComponent } from '../pages/tickets/ticketsComponent';
import { RegisterComponent } from '../pages/register/registerComponent';
import { RegisterService } from '../services/registerService';
import { addMoviesComponent } from '../pages/admin/add-movies/addMoviesComponent';
import { AddStoresComponent } from '../pages/admin/add-stores/addStoresComponent';
import { AddSessionComponent } from '../pages/admin/add-sessions/addSessionComponent';
import { adminComponent } from '../pages/admin/adminComponent';
import { StoreService } from '../services/storeService';
import { RoomService } from '../services/roomService';
import { CheckoutService } from '../services/checkoutService';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    sessionComponent,
    CheckoutComponent,
    addRoomsComponent,
    TicketsComponent,
    RegisterComponent,
    addMoviesComponent,
    AddStoresComponent,
    AddSessionComponent,
    adminComponent
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
    SessionService,
    RegisterService,
    StoreService,
    RoomService,
    SessionService,
    CheckoutService
  ],
  bootstrap: [AppComponent, 
  LoginComponent,
  HomeComponent,
  sessionComponent,
  CheckoutComponent,
  addRoomsComponent,
  TicketsComponent,
  RegisterComponent,
  addMoviesComponent,
  AddStoresComponent,
  AddSessionComponent,
  adminComponent
]
})
export class AppModule { }
