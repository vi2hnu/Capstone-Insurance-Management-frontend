import { Component, OnInit, inject } from '@angular/core';
import { ClaimModel } from '../../../../core/model/claim/claim';
import { ClaimService } from '../../service/claims-service';
import { ClaimReviewModel } from '../../model/claim-review-model';
import { UserService } from '../../../../core/service/user/user-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-claim-review-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './claim-review-component.html',
  styleUrl: './claim-review-component.css',
})
export class ClaimReviewComponent implements OnInit {
  claim!: ClaimModel;
  request: ClaimReviewModel = {
    claimsOfficerId: '',
    claimsId: 0,
    status: '',
    comments: '',
  };
  message = '';
  isError = false;
  claimService = inject(ClaimService);
  userService = inject(UserService);

  ngOnInit() {
    this.claim = history.state.claim;

    this.request.claimsId = this.claim.id;
    this.request.claimsOfficerId = this.userService.getUserId()!;
  }

  downloadDocument(url: string) {
    if (!url){
      return;
    }
    window.open(url, '_blank');
  }

  submitReview(status: string) {
    this.request.status = status;

    this.claimService.validateClaim(this.request).subscribe({
      next: () => {
        this.message = 'Claim review submitted successfully';
        this.isError = false;
      },
      error: () => {
        this.message = 'Failed to submit claim review';
        this.isError = true;
      }
    });
  }

}
