import { Component, inject, Input } from '@angular/core';
import { PlanModel } from '../../../../core/model/policy/plolicy-model';
import { FormsModule } from '@angular/forms';
import { ProviderService } from '../../service/provider/provider-service';
import { UserService } from '../../../../core/service/user/user-service';

@Component({
  selector: 'app-register-plan-component',
  imports: [FormsModule],
  templateUrl: './register-plan-component.html',
  styleUrl: './register-plan-component.css',
})
export class RegisterPlanComponent {
  @Input() planId!: number;
  @Input() hospitalId!: string;
  providerService = inject(ProviderService);
  userService = inject(UserService);
  networkType !: string;
  successMessage = '';
  errorMessage  = '';
  register(){
    const userId = this.userService.getUserId();
    if(!userId){
      return;
    }
    this.providerService.registerPlan(userId,this.hospitalId,this.planId.toString(),this.networkType).subscribe({
      next: ()=>{
        this.successMessage = "Plan registerd successfully";
      },
      error: ()=>{
        this.errorMessage = "Plan failed to register";
      }
    })
  }
}
