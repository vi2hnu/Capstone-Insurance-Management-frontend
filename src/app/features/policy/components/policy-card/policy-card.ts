import { Component, inject, Input, OnInit } from '@angular/core';
import { PlolicyModel } from '../../../../core/model/policy/plolicy-model';
import { PolicyService } from '../../../../core/service/policy/policy-service';

@Component({
  selector: 'app-policy-card',
  imports: [],
  templateUrl: './policy-card.html',
  styleUrl: './policy-card.css',
})
export class PolicyCard implements OnInit{
  @Input() id!: string;
  policy: PlolicyModel[] = [];
  policyService = inject(PolicyService);

  ngOnInit(): void {
    this.policyService.getAllEnrolledPlan(this.id).subscribe({
      next: (data) => {
        this.policy = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
