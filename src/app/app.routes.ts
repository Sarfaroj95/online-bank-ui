
import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { AdminLoginComponent } from './components/admin-login/admin-login';
import { Analytics } from './components/dashboard/pages/analytics/analytics';
import { Transactions } from './components/dashboard/pages/transactions/transactions';
import { Investment } from './components/dashboard/pages/investment/investment';
import { Overview } from './components/dashboard/pages/overview/overview';

export const routes: Routes = [
  { path: '', redirectTo: 'admin-login', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'admin-login', component: AdminLoginComponent }, // UPDATE THIS
  { path: 'login', component: Login },
  { path: 'dashboard', component: DashboardComponent },

 {
  path: 'dashboard',
  component: DashboardComponent,
  children: [
    // 1. Define all your pages
    { path: 'overview', component: Overview },
    { path: 'analytics', component: Analytics },
    { path: 'customers', loadComponent: () => import('./components/dashboard/pages/customers/customers').then(m => m.Customers) },
    { path: 'transactions', component: Transactions },
    { path: 'investment', component: Investment },

    // 2. The "Default" fix: Redirect empty child to 'overview'
    { path: '', redirectTo: 'overview', pathMatch: 'full' }
  ]
}
];
