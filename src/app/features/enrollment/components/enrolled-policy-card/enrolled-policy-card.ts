import { Component, Input, inject } from '@angular/core';
import { PlolicyModel } from '../../../../core/model/policy/plolicy-model';
import { EnrollmentService } from '../../service/enrollment-service';
import { Roleservice } from '../../../../core/service/roleservice';
import { UserService } from '../../../../core/service/user/user-service';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrolled-policy-card',
  standalone: true,
  templateUrl: './enrolled-policy-card.html',
  styleUrl: './enrolled-policy-card.css',
})
export class EnrolledPolicyCard {
  @Input() policy!: PlolicyModel;
  @Input() userId!: string; // customerId

  private enrollmentService = inject(EnrollmentService);
  private roleService = inject(Roleservice);
  private userService = inject(UserService);
  private router = inject(Router);

  successMessage = '';
  errorMessage = '';

  private buildRequest() {
    const role = this.roleService.getRole();

    const request: any = {
      userId: this.userId,
      policyId: this.policy.id,
    };

    if (role === 'INSURANCE_AGENT') {
      request.agentId = this.userService.getUserId();
    }

    return request;
  }

  renew(): void {
    this.enrollmentService.renewPolicy(this.buildRequest())
      .subscribe({
        next: (policy) => {
          this.policy = policy;
          this.successMessage = 'Policy renewed successfully';
          this.errorMessage = '';
        },
        error: () => {
          this.errorMessage = 'Failed to renew policy.';
        }
      });
  }

  cancel(): void {
    this.enrollmentService.cancelPolicy(this.buildRequest())
      .subscribe({
        next: (policy) => {
          this.policy = policy;
          this.successMessage = 'Policy cancelled successfully';
          this.errorMessage = '';
        },
        error: () => {
          this.errorMessage = 'Failed to cancel policy.';
        }
      });
  }

  claim(): void {
    this.router.navigate(
      ['claim/make/claim'],
      {
        state: {
          policyId: this.policy.id,
          planId: this.policy.plan.id,
        },
      }
    );
  }
}
