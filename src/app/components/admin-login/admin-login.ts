import { Component, ChangeDetectorRef } from '@angular/core'; // Added ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toast: ToastrService,
    private cdr: ChangeDetectorRef,
  ) {
    this.loginForm = this.fb.group({
      email: ['admin@bank.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]],
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = null;
      const { email, password } = this.loginForm.value;

      setTimeout(() => {
        if (email === 'admin@bank.com' && password === '123456') {
          console.log('Login Successful');
          this.toast.success('Authentication successful', '', {
            timeOut: 3000,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-center',
            tapToDismiss: true,
          });
          this.router.navigate(['/dashboard']);
        } else {
          // --- STOP SPINNER ---
          this.isLoading = false;

          if (email !== 'admin@bank.com') {
            this.errorMessage = 'Admin account not found.';
          } else {
            this.errorMessage = 'Incorrect password. Please try again.';
          }

          // --- FORCE UI UPDATE ---
          this.cdr.detectChanges();
        }
      }, 500);
    } else {
      this.loginForm.markAllAsTouched();
      this.errorMessage = 'Please fill in all fields.';
    }
  }
}
