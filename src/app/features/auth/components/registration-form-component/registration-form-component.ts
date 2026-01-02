// registration-form-component.ts
import { Component, inject } from '@angular/core';
import { RegisterModel } from '../../model/register-model';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-form-component',
  templateUrl: './registration-form-component.html',
  imports: [CommonModule,FormsModule],
  styleUrls: ['./registration-form-component.css'],
})
export class RegistrationFormComponent {
  request: RegisterModel = { name: '', username: '', email: '', password: '', gender: 'MALE' };
  authService = inject(AuthService);
  router = inject(Router);

  loading = false;
  errorMessage = '';
  successMessage = '';

  submit() {
    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.authService.register(this.request).subscribe({
      next: (res) => {
        this.successMessage = 'Registration successful! Now please login with same credentials';
        this.loading = false;
        setTimeout(() => {
          this.successMessage = '';
          this.errorMessage = '';
          this.router.navigate(['/auth/login']);
        }, 50000);
      },
      error: (err) => {
        this.loading = false;
        if (err.status === 409) {
          this.errorMessage = 'username or email already exists';
        } else {
          this.errorMessage = 'Something went wrong. Try again.';
        }
      }
    });
  }

  goToLogin(){
    this.router.navigate(['/auth/login']);
  }

  goToForgotPassword(){
    this.router.navigate(['/auth/forgot-password']);
  }
}
