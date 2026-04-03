import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
    }
];
}
