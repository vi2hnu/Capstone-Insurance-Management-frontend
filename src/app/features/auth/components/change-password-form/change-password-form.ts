import { Component, inject, Input, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password-form',
  imports: [FormsModule],
  templateUrl: './change-password-form.html',
  styleUrl: './change-password-form.css',
})
export class ChangePasswordForm implements OnInit {
  @Input() userName !: string;
  requestChangePassword: boolean = false;
  readonly authService = inject(AuthService);
  router = inject(Router);
  request = {
    username: '',
    oldPassword: '',
    newPassword: ''
  };

  newPasswordRepeat = '';

  error = false;
  errorMessage = '';

  passwordChangeSuccess = false;
  ngOnInit(): void {
    this.request.username = this.userName;
  }


  changePassword() {
    this.error = false;

    if (this.request.oldPassword === this.request.newPassword) {
      this.error = true;
      this.errorMessage = 'New password must be different from old password';
      return;
    }

    if (this.request.newPassword !== this.newPasswordRepeat) {
      this.error = true;
      this.errorMessage = 'New password and repeated password do not match';
      return;
    }

    this.authService.changePassword(this.request).subscribe({
      next: () => {
        this.passwordChangeSuccess = true;
        this.requestChangePassword = false;
        localStorage.clear();
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        this.error = true;

        if (err.status === 401) {
          this.errorMessage = 'Incorrect old password';
        } else {
          this.errorMessage = 'Internal server error. Please try again later.';
        }
      }
    });
  }

}
