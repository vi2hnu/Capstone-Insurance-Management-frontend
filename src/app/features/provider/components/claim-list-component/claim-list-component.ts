import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ClaimModel } from '../../../../core/model/claim/claim';
import { ClaimsService } from '../../service/claims/claims-service';
import { UserService } from '../../../../core/service/user/user-service';
import { VerifyClaimModel } from '../../model/verify-claim-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-claim-list-component',
  templateUrl: './claim-list-component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './claim-list-component.css',
})
export class ClaimListComponent implements OnChanges {
  @Input() mode!: 'view' | 'review';

  claims: ClaimModel[] = [];
  clamimService = inject(ClaimsService);
  userService = inject(UserService);

  hospital = localStorage.getItem('hospital');
  providerId = this.userService.getUserId();

  errorMessage = '';
  successMessage = '';

  reviewStatus: Record<number, 'APPROVED' | 'REJECTED'> = {};
  reviewComments: Record<number, string> = {};

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mode']) {
      this.handleMode(this.mode);
    }
  }

  private handleMode(mode: 'view' | 'review') {
    mode === 'view' ? this.loadClaimsForView() : this.loadClaimsForReview();
  }

  private loadClaimsForView() {
    if (!this.hospital) return;
    const id = JSON.parse(this.hospital).id;

    this.clamimService.getSubmittedClaims(id).subscribe({
      next: res => (this.claims = res),
    });
  }

  private loadClaimsForReview() {
    if (!this.hospital) return;
    const id = JSON.parse(this.hospital).id;

    this.clamimService.getClaimsForValidation(id).subscribe({
      next: res => (this.claims = res),
      error: () => (this.errorMessage = 'failed to load claims for review'),
    });
  }

  submitReview(claimId: number) {
    if (!this.reviewStatus[claimId] || !this.reviewComments[claimId]) {
      this.errorMessage = 'Status and comment are required';
      return;
    }

    const payload: VerifyClaimModel = {
      providerId: this.providerId!,
      claimId,
      status: this.reviewStatus[claimId],
      comments: this.reviewComments[claimId],
    };

    this.clamimService.verifyClaim(payload).subscribe({
      next: () => {
        this.successMessage = 'Claim reviewed successfully';
        this.errorMessage = '';
      },
      error: () => {
        this.errorMessage = 'Failed to review claim';
        this.successMessage = '';
      },
    });
  }
}
