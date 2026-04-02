import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './left-menu.html',
  styleUrl: './left-menu.css',
})
export class LeftMenuComponent {
  activeMenuItem: string = 'Dashboard';
  activeIndex: number = 0;

  readonly itemHeight: number = 56;  // matches height: 56px on <a>
  readonly itemGap: number = 6;      // matches space-y-1.5 = 6px
  readonly navPaddingTop: number = 24; // matches pt-6 = 24px

  setActive(name: string, index: number) {
    this.activeMenuItem = name;
    this.activeIndex = index;
  }

  getActiveOffset(): number {
    return this.navPaddingTop + this.activeIndex * (this.itemHeight + this.itemGap);
  }
}