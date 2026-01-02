import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth-service';
import { ForgotPasswordModel, OtpVerificationModel } from '../../model/forgot-password-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-form-component',
  imports: [FormsModule],
  templateUrl: './forgot-password-form-component.html',
  styleUrl: './forgot-password-form-component.css',
})
export class ForgotPasswordFormComponent {
  otpGenerated: boolean = false;
  email: string = '';
  authService = inject(AuthService);
  errorMessage: string = '';  
  error: boolean = false;
  success: string = '';
  validOtp: boolean = false;
  otp: string = '';
  otpRequest: OtpVerificationModel = { email: '', otp: '' };
  request: ForgotPasswordModel = { email: '' ,password:''};
  router = inject(Router);

  
  generateOtp(){
    this.authService.getOtp(this.email).subscribe({
      next: (res) => {
        this.otpGenerated = true;
      },
      error: (err) => {
        console.error('Error generating OTP');
      }
    });
  }

  verifyOtp(){
    this.otpRequest.email = this.email;
    this.otpRequest.otp = this.otp;
    this.authService.verifyOtp(this.otpRequest).subscribe({
      next: (res) => {
        this.validOtp = true;
        this.error = false;
        this.request.email = this.email;
      },
      error: (err) => {
        this.errorMessage = 'Invalid OTP. Please try again.';
        this.error = true;
      }
    });
  }

  forgetPassword(){
    
    this.authService.forgotPassword(this.request).subscribe({
      next: (res) => {
        this.success = 'Password reset successful! Please login with your new password.';
        this.error = false;
      },
      error: (err) => {
        this.errorMessage = 'Error resetting password. Please try again.';
        this.error = true;
      }
    });
  }

  goToLogin(){
    this.router.navigate(['/auth/login']);
  }
  
}
