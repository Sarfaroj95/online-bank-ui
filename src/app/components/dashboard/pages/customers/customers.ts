import { CommonModule } from '@angular/common';
import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-customers',
  imports: [CommonModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {
  users = [
    {
        "customerId": 1,
        "firstName": "Jisan",
        "middleName": "Hoque",
        "lastName": "Gayen",
        "email": "jisan.gayen@gmail.com",
        "phone": "9732926838",
        "dateOfBirth": "2001-04-15T00:00:00.000Z",
        "aadhaarNumber": "457965889586",
        "panNumber": "ABCDE4278M",
        "Address": "Whitefiled, Bangalore, 5660066",
        "cifNumber": "66262624",
        "isVerificationStatus": "PENDING",
        "isVerified": false,
        "isActive": true,
        "createdAt": "2026-04-03T10:14:41.588Z",
        "updatedAt": "2026-04-03T10:14:41.588Z"
    },
    {
        "customerId": 3,
        "firstName": "Sarfaroj",
        "middleName": "",
        "lastName": "Gayen",
        "email": "sarfaroj@gmail.com",
        "phone": "8145680201",
        "dateOfBirth": "1996-04-10T00:00:00.000Z",
        "aadhaarNumber": "457965889587",
        "panNumber": "ABCDE4842D",
        "Address": "Whitefiled, Bangalore, 5660066",
        "cifNumber": "90965555",
        "isVerificationStatus": "PENDING",
        "isVerified": false,
        "isActive": false,
        "createdAt": "2026-04-03T10:21:03.098Z",
        "updatedAt": "2026-04-03T10:21:03.098Z"
    },
    {
        "customerId": 4,
        "firstName": "Sreedipto",
        "middleName": "",
        "lastName": "Roy",
        "email": "sreedipto@gmail.com",
        "phone": "8145685658",
        "dateOfBirth": "1992-09-10T00:00:00.000Z",
        "aadhaarNumber": "457965888526",
        "panNumber": "ABCDE4855W",
        "Address": "Whitefiled, Bangalore, 5660066",
        "cifNumber": "73558425",
        "isVerificationStatus": "PENDING",
        "isVerified": false,
        "isActive": false,
        "createdAt": "2026-04-03T21:58:27.212Z",
        "updatedAt": "2026-04-03T21:58:27.212Z"
    }
];


// State management
  isModalOpen = signal(false);
  selectedUser = signal<any>(null);

  openDeleteModal(user: any) {
    this.selectedUser.set(user);
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  confirmDelete() {
    const userId = this.selectedUser()?.customerId;
    this.users = this.users.filter(u => u.customerId !== userId);
    this.closeModal();
  }

}
