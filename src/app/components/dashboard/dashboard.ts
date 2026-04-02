// import { Component } from '@angular/core';
// import { LeftMenuComponent } from './left-menu/left-menu';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-dashboard',
//   imports: [LeftMenuComponent],
//   templateUrl: './dashboard.html',
//   template: `<router-outlet></router-outlet>`,
//   styleUrl: './dashboard.css',
// })
// export class Dashboard {}



import { Component } from '@angular/core';
import { LeftMenuComponent } from './left-menu/left-menu';
import { RouterOutlet } from '@angular/router'; // 1. Keep this import
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  // 2. Add RouterOutlet here so the HTML can "see" it
  imports: [LeftMenuComponent, RouterOutlet, CommonModule], 
  // 3. REMOVE the 'template:' line. Only use templateUrl.
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent { } // Renamed to match standard naming
