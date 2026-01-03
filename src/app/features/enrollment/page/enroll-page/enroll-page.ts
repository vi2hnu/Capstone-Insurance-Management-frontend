import { Component, inject, OnInit } from '@angular/core';
import { PlanModel, PlolicyModel } from '../../../../core/model/policy/plolicy-model';
import { EnrollmentService } from '../../service/enrollment-service';
import { UserService } from '../../../../core/service/user/user-service';
import { ActivatedRoute } from '@angular/router';
import { EnrolledPolicyCard } from '../../components/enrolled-policy-card/enrolled-policy-card';
import { EnrollPlanCard } from '../../components/enroll-plan-card/enroll-plan-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enroll-page',
  imports: [EnrollPlanCard, EnrolledPolicyCard, CommonModule],
  templateUrl: './enroll-page.html',
  styleUrl: './enroll-page.css',
})
export class EnrollPage implements OnInit {
  policy?: PlolicyModel;
  plan !: PlanModel;
  route = inject(ActivatedRoute);
  userService = inject(UserService);
  enrollmentService = inject(EnrollmentService);
  userId: string | null = null;
  planId!: number;
  enrolled: boolean = false;

  ngOnInit() {
    this.userId = this.userService.getUserId();
    this.planId = Number(this.route.snapshot.paramMap.get('planId'));
    this.plan = history.state.plan;

    if (!this.userId) {
      return;
    }

    this.enrollmentService
      .checkEnrollment(this.userId, this.planId)
      .subscribe(policy => {
        if (policy && policy.id && policy.status!='CANCELLED') {
          this.policy = policy;
          this.enrolled = true;
        } else {
          this.enrolled = false;
        }
      });
  }
}
