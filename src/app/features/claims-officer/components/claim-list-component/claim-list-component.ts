import { Component, inject, OnInit } from '@angular/core';
import { ClaimModel } from '../../model/claim-model';
import { ClaimService } from '../../service/claims-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim-list-component',
  templateUrl: './claim-list-component.html',
  styleUrl: './claim-list-component.css',
})

export class ClaimListComponent implements OnInit {
  claims: ClaimModel[] = [];
  claimService = inject(ClaimService);
  router = inject(Router);

  ngOnInit() {
    this.claimService.getClaims().subscribe(data => {
      this.claims = data;
    });
  }

  downloadDocument(url: string) {
    if (!url){
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
