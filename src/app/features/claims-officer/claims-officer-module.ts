import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CLAIMS_OFFICER_ROUTES } from './claims-officer.routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(CLAIMS_OFFICER_ROUTES)

  ]
})
export class ClaimsOfficerModule { }
