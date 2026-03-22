import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { LeftMenuComponent } from "./left-menu/left-menu.component";

@Component({
  selector: 'app-dashboard',
  imports: [MatSlideToggleModule, MatTabsModule, LeftMenuComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
