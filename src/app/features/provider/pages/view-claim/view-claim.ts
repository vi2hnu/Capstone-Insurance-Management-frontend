import { Component } from '@angular/core';
import { ClaimListComponent } from "../../components/claim-list-component/claim-list-component";

@Component({
  selector: 'app-view-claim',
  imports: [ClaimListComponent],
  templateUrl: './view-claim.html',
  styleUrl: './view-claim.css',
})
export class ViewClaim {

}
