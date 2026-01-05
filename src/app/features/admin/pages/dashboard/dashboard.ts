import { Component } from '@angular/core';
import { PolicyStatusPannel } from "../../components/policy-status-pannel/policy-status-pannel";
import { TopPlansPanel } from "../../components/top-plans-panel/top-plans-panel";
import { ClaimsStatusPanel } from "../../components/claims-status-panel/claims-status-panel";
import { ClaimByHospitalPanel } from "../../components/claim-by-hospital-panel/claim-by-hospital-panel";
import { TopClaimsPanel } from "../../components/top-claims-panel/top-claims-panel";

@Component({
  selector: 'app-dashboard',
  imports: [PolicyStatusPannel, TopPlansPanel, ClaimsStatusPanel, ClaimByHospitalPanel, TopClaimsPanel],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
