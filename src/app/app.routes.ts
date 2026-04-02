// import { Routes } from '@angular/router';
// import { Dashboard } from './components/dashboard/dashboard';
// import { Login } from './components/login/login';
// import { Home } from './components/home/home';
// import { AdminLogin } from './components/admin-login/admin-login';

// export const routes: Routes = [
//     {path: '', component: Dashboard, pathMatch: 'full'},
//     {path: 'home', component: Home},
//     {path: 'admin-login', component: AdminLogin},
//     {path: 'login', component: Login},
//     {path: "dashboard", component: Dashboard},
// ];

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
        // { path: 'overview', redirectTo: 'overview', pathMatch: 'full' },

        { path: 'overview', component: Overview }, 
      // URL is dashboard/analytics
      { path: 'analytics', component: Analytics }, 
      
      // When URL is /dashboard/transactions
      { path: 'transactions', component: Transactions }, 
      
      // When URL is /dashboard/investment
      { path: 'investment', component: Investment },
      
      // Default page when user just goes to /dashboard
      
    ]
  }
];
