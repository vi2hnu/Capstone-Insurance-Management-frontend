import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { POLICY_ROUTE } from './policy.routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(POLICY_ROUTE)
  ]
})
export class PolicyModule { }
