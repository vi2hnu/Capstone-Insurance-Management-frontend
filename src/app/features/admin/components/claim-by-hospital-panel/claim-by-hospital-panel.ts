import { Component, inject, OnInit } from '@angular/core';
import { Provider } from '../../service/provider/provider';
import { Hospital } from '../../../../core/model/provider/provider';
import { ClaimService } from '../../service/claims/claim-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-claim-by-hospital-panel',
  templateUrl: './claim-by-hospital-panel.html',
  imports: [CommonModule],
  styleUrl: './claim-by-hospital-panel.css',
})
export class ClaimByHospitalPanel implements OnInit {

  private readonly claimService = inject(ClaimService);
  private readonly providerService = inject(Provider)

  hospitals: Hospital[] = [];
  claims: any[] = [];

  selectedHospitalId?: number;
  pageSize = 10;
  pageNumber = 0;
  totalPages = 0;

  pageSizes = [1, 2, 5];

  ngOnInit(): void {
    this.loadHospitals();
  }

  private loadHospitals(): void {
    this.providerService.getHospitals().subscribe({
      next: (data) => this.hospitals = data
    });
  }

  onHospitalChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedHospitalId = Number(target.value);
    this.pageNumber = 0;
    this.loadClaims();
  }

  onPageSizeChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.pageSize = Number(target.value);
    this.pageNumber = 0;
    this.loadClaims();
  }

  onPageChange(page: number): void {
    if (page < 0 || page >= this.totalPages) return;
    this.pageNumber = page;
    this.loadClaims();
  }

  private loadClaims(): void {
    if (!this.selectedHospitalId) return;

    this.claimService.getClaimsByHospital(this.selectedHospitalId, this.pageNumber, this.pageSize)
      .subscribe(page => {
        this.claims = page.content;
        this.totalPages = page.totalPages;
      });
  }
}
