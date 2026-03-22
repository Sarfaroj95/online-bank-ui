import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { AdminLogin } from './components/admin-login/admin-login';

export const routes: Routes = [
    {path: '', component: Dashboard, pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'admin-login', component: AdminLogin},
    {path: 'login', component: Login},
    {path: "dashboard", component: Dashboard},
];
