import { Component, Input } from '@angular/core';
import { PlolicyModel } from '../../../../core/model/policy/plolicy-model';
import { EnrollmentService } from '../../service/enrollment-service';
import { UserService } from '../../../../core/service/user/user-service';
import { inject } from '@angular/core';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-enrolled-policy-card',
  imports: [],
  standalone: true,
  templateUrl: './enrolled-policy-card.html',
  styleUrl: './enrolled-policy-card.css',
})
export class EnrolledPolicyCard {
  @Input() policy!: PlolicyModel;

  private enrollmentService = inject(EnrollmentService);
  private userService = inject(UserService);

  successMessage: string = '';
  errorMessage: string = '';

  renew() {
    const userId = this.userService.getUserId();
    if (!userId) {
      this.errorMessage = 'User not logged in.';
      return;
    }

    this.enrollmentService.renewPolicy(userId, this.policy.id)
      .pipe(catchError(err => {
        this.errorMessage = 'Failed to renew policy. Try again.';
        return of(null);
      }))
      .subscribe(updatedPolicy => {
        if (updatedPolicy) {
          this.policy = updatedPolicy;
          this.successMessage = `Policy renewed successfully!`;
          this.errorMessage = '';
        }
      });
  }

  cancel() {
    const userId = this.userService.getUserId();
    if (!userId) {
      this.errorMessage = 'User not logged in.';
      return;
    }

    this.enrollmentService.cancelPolicy(userId, this.policy.id)
      .pipe(catchError(err => {
        this.errorMessage = 'Failed to cancel policy. Try again.';
        return of(null);
      }))
      .subscribe(canceledPolicy => {
        if (canceledPolicy) {
          this.policy = canceledPolicy;
          this.successMessage = `Policy canceled successfully!`;
          this.errorMessage = '';
        }
      });
  }
}
