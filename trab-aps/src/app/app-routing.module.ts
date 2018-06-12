import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/loginComponent';
import { AuthService } from '../services/authService';

const routes: Routes = [
  { path: 'home', component: LoginComponent /*TODO*/, canActivate: [AuthService] },
];

@NgModule({
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
