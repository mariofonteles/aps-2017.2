import { Routes, RouterModule } from '@angular/router';

import { AuthService } from '../services/authService';
import { LoginComponent } from '../pages/login/loginComponent';
import { HomeComponent } from '../pages/home/homeComponent';
import { sessionComponent } from '../pages/session/sessionComponent';
import { CheckoutComponent } from '../pages/checkout/checkoutComponent';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, /*canActivate: [AuthService]*/ },
    { path: 'login', component: LoginComponent },
    {path: 'session/:name/:id', component: sessionComponent },
    {path: 'checkout', component: CheckoutComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);