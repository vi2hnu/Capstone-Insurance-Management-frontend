import { Component, inject } from '@angular/core';
import { UserCheckComponent } from "../../../../shared/component/user-check-component/user-check-component";
import { ClaimSubmissionComponent } from "../../components/claim-submission-component/claim-submission-component";
import { PolicyService } from '../../../../core/service/policy/policy-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-make-claim',
  imports: [UserCheckComponent, ClaimSubmissionComponent],
  templateUrl: './make-claim.html',
  styleUrl: './make-claim.css',
})
export class MakeClaim {
  customerId: string | null = null;
  customerEnrolled: boolean = false;
  policyId: string | null = null;  
  readonly policyService = inject(PolicyService);
  private route = inject(ActivatedRoute);
  planId = this.route.snapshot.paramMap.get('id');

  onCustomerChecked(id: string) {
    this.customerId = id;
    this.getPolicyId();
  }

  getPolicyId() {
    if (!this.customerId || !this.planId) return;

    this.policyService.checkEnrollment(this.customerId, this.planId)
      .subscribe({
        next: (response: any) => {
          this.policyId = response.id;
          if(response.status=='CANCELLED'){
            this.customerEnrolled = false;
            return;
          }
          this.customerEnrolled = true;
        },
        error: () => {
          this.customerEnrolled = false;
        }
      });
  }
}
