import { Component, inject, OnInit } from '@angular/core';
import { HospitalNetworkModel } from '../../../../core/model/provider/provider';
import { ProviderService } from '../../service/provider/provider-service';
import { ClaimFormComponent } from "../../components/claim-form-component/claim-form-component";
import { Roleservice } from '../../../../core/service/roleservice';
import { UserService } from '../../../../core/service/user/user-service';

@Component({
  selector: 'app-add-claim-page',
  imports: [ClaimFormComponent],
  templateUrl: './add-claim-page.html',
  styleUrl: './add-claim-page.css',
})
export class AddClaimPage implements OnInit {
  hospitals: HospitalNetworkModel[] = [];
  readonly providerService = inject(ProviderService);
  readonly roleService = inject(Roleservice);
  readonly userService = inject(UserService);

  planId: number = 0;
  policyId: number = 0;
  customerId!: string |null;

  ngOnInit(): void {
    this.planId = history.state.planId;
    this.policyId = history.state.policyId;

    const role = this.roleService.getRole();
    if (role === 'INSURANCE_AGENT') {
      this.customerId = history.state.customerId;
    } 
    else {
      this.customerId = this.userService.getUserId();
    }

    this.providerService.getAllProvidersPlan(this.planId)
      .subscribe({
        next: (data) => {
          this.hospitals = data;
          this.hospitals = this.hospitals.filter((data) => data.networkType==="OUT_NETWORK" )
        },
        error: (err) => console.error('Failed to load hospitals', err),
      });
      
    
  }
}
