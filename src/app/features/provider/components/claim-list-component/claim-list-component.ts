import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ClaimModel } from '../../../../core/model/claim/claim';
import { ClaimsService } from '../../service/claims/claims-service';

@Component({
  selector: 'app-claim-list-component',
  templateUrl: './claim-list-component.html',
  standalone: true,
  styleUrl: './claim-list-component.css',
})
export class ClaimListComponent implements OnChanges {
  @Input() mode!: 'view' | 'review';
  claims : ClaimModel[] = []
  clamimService = inject(ClaimsService);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mode']) {
      this.handleMode(this.mode);
    }
  }

  private handleMode(mode: 'view' | 'review') {
    if (mode === 'view') {
      this.loadClaimsForView();
    } 
    else {
      this.loadClaimsForReview();
    }
  }

  private loadClaimsForView() {
    const hospital = localStorage.getItem('hospital');
    if (!hospital) {
      console.error('Hospital not found in localStorage');
      return;
    }
    const id = JSON.parse(hospital).id;
    this.clamimService.getSubmittedClaims(id).subscribe({
      next: (response)=>{
        this.claims = response;
      }
    });
  }

  private loadClaimsForReview() {
  }
}
