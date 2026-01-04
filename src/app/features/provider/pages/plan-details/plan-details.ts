import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from '../../service/provider/provider-service';
import { PlanModel } from '../../../../core/model/policy/plolicy-model';
import { PolicyService } from '../../../../core/service/policy/policy-service';
import { RegisteredPlanComponent } from "../../components/registered-plan-component/registered-plan-component";
import { RegisterPlanComponent } from "../../components/register-plan-component/register-plan-component";

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.html',
  styleUrl: './plan-details.css',
  imports: [RegisteredPlanComponent, RegisterPlanComponent],
})
export class PlanDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private providerService = inject(ProviderService);
  policyService = inject(PolicyService);
  registered: boolean = true;
  hospitalId!: string;
  planId!: string;
  planType!: string;
  plan: PlanModel = {
    id: 0,
    name: '',
    description: '',
    premiumAmount: 0,
    coverageAmount: 0,
    duration: 0,
    status: ''
  };


  ngOnInit(): void {
    const hospital = localStorage.getItem('hospital');
    if (!hospital) {
      console.error('Hospital not found in localStorage');
      return;
    }

    this.hospitalId = JSON.parse(hospital).id;
    this.planId = this.route.snapshot.paramMap.get('id')!;

    this.policyService.getPlan(this.planId).subscribe({
      next: (plan) => {
        this.plan = plan;
      }
    });

    this.providerService
      .checkPlan(this.planId, this.hospitalId)
      .subscribe({
        next: (type) => {
          this.planType = type;
        },
        error: (err) => {
          if (err.status === 404) {
            this.registered = false;
          }
        },
      });
  }
}
