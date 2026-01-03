import { Component, inject, DoCheck } from '@angular/core';
import { Logout } from '../logout-component/logout';
import { Roleservice } from '../../../core/service/roleservice';

@Component({
  selector: 'app-header-component',
  imports: [Logout],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent implements DoCheck {
  roleService = inject(Roleservice);
  role: string | null = null;

  ngDoCheck() {
    this.role = this.roleService.getRole();
  }
}
