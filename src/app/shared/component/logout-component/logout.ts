import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ConformationComponent } from '../conformation-component/conformation-component';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [ConformationComponent],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout {
  router = inject(Router);
  showConfirmation = false;

  logout() {
    this.showConfirmation = true;
  }

  confirmLogout() {
    this.showConfirmation = false;
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

  cancelLogout() {
    this.showConfirmation = false;
  }
}