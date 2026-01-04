import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PlanModel, PlolicyModel } from '../../../../core/model/policy/plolicy-model';
import { EnrollmentService } from '../../service/enrollment-service';
import { UserService } from '../../../../core/service/user/user-service';
import { Roleservice } from '../../../../core/service/roleservice';

import { EnrolledPolicyCard } from '../../components/enrolled-policy-card/enrolled-policy-card';
import { EnrollPlanCard } from '../../components/enroll-plan-card/enroll-plan-card';
import { UserCheckComponent } from '../../../../shared/component/user-check-component/user-check-component';

@Component({
  selector: 'app-enroll-page',
  standalone: true,
  imports: [
    CommonModule,
    EnrollPlanCard,
    EnrolledPolicyCard,
    UserCheckComponent,
  ],
  templateUrl: './enroll-page.html',
  styleUrl: './enroll-page.css',
})
export class EnrollPage implements OnInit {
  policy?: PlolicyModel;
  plan!: PlanModel;

  userId: string | null = null;
  planId!: number;

  enrolled = false;
  checkUser = false;

  private route = inject(ActivatedRoute);
  private userService = inject(UserService);
  private enrollmentService = inject(EnrollmentService);
  private roleService = inject(Roleservice);

  ngOnInit(): void {
    const role = this.roleService.getRole();

    this.planId = Number(this.route.snapshot.paramMap.get('planId'));
    this.plan = history.state.plan;

    if (role === 'INSURANCE_AGENT') {
      this.checkUser = true;
      return;
    }

    this.userId = this.userService.getUserId();
    if (this.userId) {
      this.loadEnrollment();
    }
  }

  onCustomerChecked(customerId: string): void {
    this.userId = customerId;
    this.checkUser = false;
    this.loadEnrollment();
  }

  private loadEnrollment(): void {
    if (!this.userId) {
      return;
    }

    this.enrollmentService
      .checkEnrollment(this.userId, this.planId)
      .subscribe(policy => {
        if (policy && policy.id && policy.status !== 'CANCELLED') {
          this.policy = policy;
          this.enrolled = true;
        } else {
          this.enrolled = false;
        }
      });
  }
}
