import { Component, inject, DoCheck } from '@angular/core';
import { Logout } from '../logout-component/logout';
import { Roleservice } from '../../../core/service/roleservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [Logout],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent implements DoCheck {
  roleService = inject(Roleservice);
  role: string | null = null;
  router = inject(Router);
  ngDoCheck() {
    this.role = this.roleService.getRole();
  }

  routeToProfile(){
    this.router.navigate(['/auth/info']);
  }

  routeToMyPolicies(){
    this.router.navigate(['/your/policies']);
  }

  routeToMyClaims(){
    this.router.navigate(['/claim/view/all/claims']);
  }

  routeToOfficerDashboard(){
    this.router.navigate(['/claims-officer/dashboard']);
  }

  routeToProviderClaims(){
    this.router.navigate(['/provider/view/claim']);
  }

  routeToProviderReview(){
    this.router.navigate(['/provider/review/claims']);
  }

  routeToPlans(){
    this.router.navigate(['/']);
  }

  routeToCreateUser(){
    this.router.navigate(['/admin/create/user']);
  }
  
  routeToAddPlan(){
    this.router.navigate(['/admin/add/plan']);
  }

  routeToAddProvider(){
    this.router.navigate(['/admin/add/hospital']);
  }

  routeToAdminDashboard(){
    this.router.navigate(['/admin/dashboard']);
  }
}
