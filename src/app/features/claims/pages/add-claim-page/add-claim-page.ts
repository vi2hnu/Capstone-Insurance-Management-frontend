import { Component, inject, OnInit } from '@angular/core';
import { HospitalNetworkModel } from '../../../../core/model/provider/provider';
import { ProviderService } from '../../service/provider/provider-service';
import { ClaimFormComponent } from "../../components/claim-form-component/claim-form-component";

@Component({
  selector: 'app-add-claim-page',
  imports: [ClaimFormComponent],
  templateUrl: './add-claim-page.html',
  styleUrl: './add-claim-page.css',
})
export class AddClaimPage implements OnInit {
  hospitals: HospitalNetworkModel[] = [];
  providerService = inject(ProviderService);
  planId: number = 0;
  policyId: number = 0;

  ngOnInit(): void {
    this.planId = history.state.planId;
    this.policyId = history.state.policyId;
    this.providerService.getAllProvidersPlan(this.planId)
      .subscribe(data => {
        this.hospitals = data;
      }, err => {
        console.error('Failed to load hospitals', err);
      });
  }
}
