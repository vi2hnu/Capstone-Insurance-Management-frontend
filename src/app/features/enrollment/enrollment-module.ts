import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ENROLLMENT_ROUTE } from './enrollment.routes';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ENROLLMENT_ROUTE)
  ]
})
export class EnrollmentModule { }
