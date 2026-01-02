import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth-service';
import { LoginModel, LoginResponse } from '../../model/login-model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form-component',
  imports: [FormsModule],
  templateUrl: './login-form-component.html',
  styleUrls: ['./login-form-component.css']
})
export class LoginFormComponent {
  request: LoginModel = { username: '', password: '' };
  loading = false;
  error: string = '';
  router = inject(Router);
  
  authService = inject(AuthService);

  onSubmit() {
    this.loading = true;
    this.error = '';

    this.authService.login(this.request).subscribe({
      next: (response: LoginResponse) => {
        this.loading = false;
        console.log('Login success:', response);
      },
      error: (err) => {
        this.loading = false;
        if(err.status === 401) {
          this.error = 'Invalid username or password.';
        }
        else {
          this.error = 'Internal server error. Please try again later.';
        }
        console.error('Login error:', err);
      }
    });
  }

  goToRegistration(){
    this.router.navigate(['/auth/register']);
  }

  goToForgotPassword(){
    this.router.navigate(['/auth/forgot-password']);
  }
}
