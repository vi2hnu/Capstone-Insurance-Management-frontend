import { Component, Input, inject } from '@angular/core';
import { PlanModel } from '../../../../core/model/policy/plolicy-model';
import { EnrollmentService } from '../../service/enrollment-service';
import { Roleservice } from '../../../../core/service/roleservice';
import { UserService } from '../../../../core/service/user/user-service';

@Component({
  selector: 'app-enroll-plan-card',
  standalone: true,
  templateUrl: './enroll-plan-card.html',
  styleUrl: './enroll-plan-card.css',
})
export class EnrollPlanCard {
  @Input() plan!: PlanModel;
  @Input() userId!: string;

  private enrollmentService = inject(EnrollmentService);
  private roleService = inject(Roleservice);
  private userService = inject(UserService);

  successMessage = '';
  errorMessage = '';

  enroll(): void {
    if (!this.userId) {
      this.errorMessage = 'Invalid user';
      return;
    }

    const role = this.roleService.getRole();

    const request: any = {
      userId: this.userId,
      planId: this.plan.id,
    };

    if (role === 'INSURANCE_AGENT') {
      const agentId = this.userService.getUserId();
      if (!agentId) {
        this.errorMessage = 'Invalid agent';
        return;
      }
      request.agentId = agentId;
    }

    this.enrollmentService.enrollPlan(request)
      .subscribe({
        next: (policy) => {
          if (policy) {
            this.successMessage = `Successfully enrolled in ${this.plan.name}!`;
            this.errorMessage = '';
          }
        },
        error: () => {
          this.errorMessage = 'Failed to enroll. Please try again.';
        }
      });

  }
}
