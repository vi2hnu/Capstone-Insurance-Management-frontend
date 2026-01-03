import { Component, inject, OnInit } from '@angular/core';
import { PlanModel } from '../../../core/model/policy/plolicy-model';
import { PolicyService } from '../../service/policy/policy-service';

@Component({
  selector: 'app-plans-component',
  imports: [],
  templateUrl: './plans-component.html',
  styleUrl: './plans-component.css',
})
export class PlansComponent implements OnInit{
  plans : PlanModel[] = [];
  policyService = inject(PolicyService);

  ngOnInit() {
    this.policyService.getAllPlan().subscribe( data =>{
      this.plans = data;
    });
  }
}
