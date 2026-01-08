import { Component, inject } from '@angular/core';
import { PlanModel } from '../../../../core/model/policy/plolicy-model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Policy } from '../../service/policy/policy';

@Component({
  selector: 'app-add-plan-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-plan-form.html',
  styleUrl: './add-plan-form.css',
})
export class AddPlanForm {
  request : PlanModel = {
    id:0,
    name: '',
    description: '',
    premiumAmount: 0,
    coverageAmount: 0,
    duration: 0,
    status: ''
  };

  readonly policyService = inject(Policy);
  errorMessage = '';
  successMessage = '';
  createPlan(){
    this.errorMessage = '';
    this.successMessage = ''

    if (!this.request.name?.trim() || !this.request.description?.trim()){
      this.errorMessage = 'Plan name and description cannot be empty or spaces only';
      return;
    }
    
    this.policyService.addPlan(this.request).subscribe({
      next: ()=>{
        this.successMessage = 'Plan added succesfully';
      },
      error: (err) =>{
        if(err.status == 409){
          this.errorMessage = 'Plan already exists';
        }
        else if(err.status === 400){
          this.errorMessage = 'Invalid form';
        }
        else{
          this.errorMessage = 'Internal server error';
        }
      }
    })
  }
}
