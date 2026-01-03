import { Component } from '@angular/core';
import { ClaimListComponent } from '../../components/claim-list-component/claim-list-component';

@Component({
  selector: 'app-officer-dashboard',
  imports: [ClaimListComponent],
  templateUrl: './officer-dashboard.html',
  styleUrl: './officer-dashboard.css',
})
export class OfficerDashboard {

}
