import { Component, inject, OnInit } from '@angular/core';
import { ClaimModel } from '../../model/claim-model';
import { ClaimService } from '../../service/claims-service';

@Component({
  selector: 'app-claim-list-component',
  templateUrl: './claim-list-component.html',
  styleUrl: './claim-list-component.css',
})

export class ClaimListComponent implements OnInit {
  claims: ClaimModel[] = [];
  claimService = inject(ClaimService);

  ngOnInit() {
    this.claimService.getClaims().subscribe(data => {
      this.claims = data;
    });
  }
}
