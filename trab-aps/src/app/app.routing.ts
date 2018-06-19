import { Routes, RouterModule } from '@angular/router';

import { AuthService } from '../services/authService';
import { LoginComponent } from '../pages/login/loginComponent';
import { HomeComponent } from '../pages/home/homeComponent';
import { sessionComponent } from '../pages/session/sessionComponent';
import { CheckoutComponent } from '../pages/checkout/checkoutComponent';
import { addRoomsComponent } from '../pages/admin/add-rooms/addRoomsComponent';
import { TicketsComponent } from '../pages/tickets/ticketsComponent';
import { RegisterComponent } from '../pages/register/registerComponent';
import { addMoviesComponent } from '../pages/admin/add-movies/addMoviesComponent';
import { AddStoresComponent } from '../pages/admin/add-stores/addStoresComponent';
import { AddSessionComponent } from '../pages/admin/add-sessions/addSessionComponent';
import { adminComponent } from '../pages/admin/adminComponent';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, /*canActivate: [AuthService]*/ },
    { path: 'login', component: LoginComponent },
    {path: 'session', component: sessionComponent },
    {path: 'checkout', component: CheckoutComponent},
    {path: 'admin/addRooms', component: addRoomsComponent},
    {path: 'tickets', component: TicketsComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'admin', component: adminComponent},
    {path: 'admin/addMovies', component: addMoviesComponent},
    {path: 'admin/addStores', component: AddStoresComponent},
    {path: 'admin/addSessions', component: AddSessionComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);