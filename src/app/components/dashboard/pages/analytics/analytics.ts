import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics.html',
  styleUrl: './analytics.css'
})
export class Analytics {
  // Mock Data
  transactions = [
    { id: '1001', userName: 'Jisan Hoque', type: 'Deposit', amount: 5000, date: new Date(), status: 'Success' },
    { id: '1002', userName: 'Amir Khan', type: 'Withdraw', amount: 1200, date: new Date(), status: 'Pending' },
    { id: '1003', userName: 'Sara Smith', type: 'Transfer', amount: 350, date: new Date(), status: 'Failed' },
    { id: '1004', userName: 'John Doe', type: 'Deposit', amount: 800, date: new Date(), status: 'Success' },
    { id: '1005', userName: 'Mina Lee', type: 'Withdraw', amount: 2100, date: new Date(), status: 'Pending' },
    { id: '1006', userName: 'Robert Fox', type: 'Transfer', amount: 4500, date: new Date(), status: 'Success' },
  ];

  // Pagination State
  currentPage = 1;
  pageSize = 5;
  selectedTx: any = null; // Tracks modal state

  // Getters for Template
  get totalPages() {
    return Math.ceil(this.transactions.length / this.pageSize);
  }

  get pagedTransactions() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.transactions.slice(start, start + this.pageSize);
  }

  // Actions
  nextPage() { if (this.currentPage < this.totalPages) this.currentPage++; }
  prevPage() { if (this.currentPage > 1) this.currentPage--; }

  openAdminModal(tx: any) {
    this.selectedTx = { ...tx }; // Create a copy to edit
  }

  closeModal() {
    this.selectedTx = null;
  }

  confirmStatusUpdate(newStatus: string) {
    if (this.selectedTx) {
      // Find the original item and update it
      const original = this.transactions.find(t => t.id === this.selectedTx.id);
      if (original) original.status = newStatus;
      this.closeModal();
    }
  }
}