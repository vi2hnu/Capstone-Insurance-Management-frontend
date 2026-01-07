import { Component, inject, OnInit } from '@angular/core';
import { ClaimModel } from '../../../../core/model/claim/claim';
import { ClaimService } from '../../service/claims-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-claim-list-component',
  imports: [CommonModule],
  templateUrl: './claim-list-component.html',
  styleUrl: './claim-list-component.css',
})

export class ClaimListComponent implements OnInit {
  claims: ClaimModel[] = [];
  readonly claimService = inject(ClaimService);
  readonly router = inject(Router);

  ngOnInit() {
    this.claimService.getClaims().subscribe(data => {
      this.claims = data.sort((a, b) =>
        new Date(b.claimRequestDate).getTime() - new Date(a.claimRequestDate).getTime()
      );
    });
  }


  downloadDocument(url: string) {
    if (!url) {
      return;
    };
    window.open(url, '_blank');
  }

  reviewClaim(claimId: number) {
    const claim = this.claims.find(claim => claim.id === claimId);
    if (claim) {
      this.router.navigate(['/claims-officer/review'], { state: { claim } });
    }
  }
}
