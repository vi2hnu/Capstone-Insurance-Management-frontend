import { Component, Input } from '@angular/core';
import { PlanModel } from '../../../../core/model/policy/plolicy-model';
import { EnrollmentService } from '../../service/enrollment-service';
import { inject } from '@angular/core';
import { catchError, of } from 'rxjs';
import { UserService } from '../../../../core/service/user/user-service';

@Component({
  selector: 'app-enroll-plan-card',
  imports: [],
  standalone: true,
  templateUrl: './enroll-plan-card.html',
  styleUrl: './enroll-plan-card.css',
})
export class EnrollPlanCard {
  @Input() plan!: PlanModel;

  private enrollmentService = inject(EnrollmentService);
  private userService = inject(UserService);

  successMessage: string = '';
  errorMessage: string = '';

  enroll() {
    const userId = this.userService.getUserId();

    if (!userId) {
      this.errorMessage = 'User not logged in.';
      return;
    }

    this.enrollmentService.enrollPlan(userId, this.plan.id)
      .pipe(
        catchError(err => {
          this.errorMessage = 'Failed to enroll. Please try again.';
          return of(null);
        })
      )
      .subscribe(policy => {
        if (policy) {
          this.successMessage = `Successfully enrolled in ${this.plan.name}!`;
          this.errorMessage = '';
        }
      });
  }
}
