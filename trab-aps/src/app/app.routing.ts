import { Routes, RouterModule } from '@angular/router';

import { AuthService } from '../services/authService';
import { LoginComponent } from '../pages/login/loginComponent';
import { HomeComponent } from '../pages/home/homeComponent';
import { sessionComponent } from '../pages/session/sessionComponent';
import { CheckoutComponent } from '../pages/checkout/checkoutComponent';
import { addRoomsComponent } from '../pages/admin/add-rooms/addRoomsComponent';
import { TicketsComponent } from '../pages/tickets/ticketsComponent';
import { RegisterComponent } from '../pages/register/registerComponent';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, /*canActivate: [AuthService]*/ },
    { path: 'login', component: LoginComponent },
    {path: 'session/:name/:id', component: sessionComponent },
    {path: 'checkout', component: CheckoutComponent},
    {path: 'admin/addRooms', component: addRoomsComponent},
    {path: 'tickets', component: TicketsComponent},
    {path: 'register', component: RegisterComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);