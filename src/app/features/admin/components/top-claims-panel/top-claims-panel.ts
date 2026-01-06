import { Component, inject, OnInit } from '@angular/core';
import { ClaimModel } from '../../../../core/model/claim/claim';
import { ClaimService } from '../../service/claims/claim-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-claims-panel',
  templateUrl: './top-claims-panel.html',
  imports: [CommonModule],
  styleUrl: './top-claims-panel.css',
})
export class TopClaimsPanel implements OnInit {
  claims : ClaimModel[] = [];
  private claimService = inject(ClaimService);

  ngOnInit() {
    this.claimService.getTopClaims().subscribe({
      next: (data) => {
        this.claims = data;
      },
      error: (err) => {
        console.error('Failed to load top claims', err);
      }
    });
  }
}
