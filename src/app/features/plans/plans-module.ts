import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PLANS_ROUTE } from './plans.routes';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(PLANS_ROUTE)
  ]
})
export class PlansModule { }
