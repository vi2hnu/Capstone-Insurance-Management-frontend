import { Component } from '@angular/core';
import { Logout } from '../logout-component/logout';

@Component({
  selector: 'app-header-component',
  imports: [Logout],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  role: string | null = null;
  user = JSON.parse(localStorage.getItem('user') || 'null');

  constructor() {
    if(this.user!=null){
      this.role = this.user.role;
    }
  }
}
