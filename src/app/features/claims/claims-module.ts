import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CLAIMS_ROUTE } from './claims.route';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(CLAIMS_ROUTE)

  ]
})
export class ClaimsModule { }
