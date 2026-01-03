import { Component, inject, OnInit } from '@angular/core';
import { PlanModel } from '../../../core/model/policy/plolicy-model';
import { PolicyService } from '../../service/policy/policy-service';
import { Roleservice } from '../../../core/service/roleservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans-component',
  imports: [],
  templateUrl: './plans-component.html',
  styleUrl: './plans-component.css',
})
export class PlansComponent implements OnInit {
  plans: PlanModel[] = [];
  policyService = inject(PolicyService);
  roleService = inject(Roleservice);
  role: string | null = null;
  router = inject(Router);

  ngOnInit() {
    this.policyService.getAllPlan().subscribe(data => {
      this.plans = data;
    });
    this.role = this.roleService.getRole();
  }

  routeUser(planId: number) {
    const selectedPlan = this.plans.find(p => p.id === planId);

    if (!selectedPlan) {
      return;
    }

    if (this.role === 'USER' || this.role === 'AGENT') {
      this.router.navigate(
        ['/enrollment', planId],
        { state: { plan: selectedPlan } }
      );
    }
    else if (this.role === 'PROVIDER') {
      this.router.navigate(['/provider/associate', { state: { plan: selectedPlan } }]);
    }
    else if (this.role === 'ADMIN') {
      this.router.navigate(['/admin/plans', { state: { plan: selectedPlan } }]);
    }
  }


}
