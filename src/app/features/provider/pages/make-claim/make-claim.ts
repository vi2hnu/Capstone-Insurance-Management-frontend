import { Component } from '@angular/core';
import { UserCheckComponent } from "../../../../shared/component/user-check-component/user-check-component";
import { ClaimSubmissionComponent } from "../../components/claim-submission-component/claim-submission-component";

@Component({
  selector: 'app-make-claim',
  imports: [UserCheckComponent, ClaimSubmissionComponent],
  templateUrl: './make-claim.html',
  styleUrl: './make-claim.css',
})
export class MakeClaim {
  customerId: string | null = null;

  onCustomerChecked(id: string) {
    this.customerId = id;
  }
}
