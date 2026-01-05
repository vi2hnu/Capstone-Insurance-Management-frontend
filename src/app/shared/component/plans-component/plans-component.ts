import { Component, inject, OnInit } from '@angular/core';
import { PlanModel } from '../../../core/model/policy/plolicy-model';
import { Roleservice } from '../../../core/service/roleservice';
import { Router } from '@angular/router';
import { PolicyService } from '../../../core/service/policy/policy-service';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-plans-component',
  templateUrl: './plans-component.html',
  styleUrls: ['./plans-component.css'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    CommonModule,
    AsyncPipe,
  ]
})
export class PlansComponent implements OnInit {
  plans: PlanModel[] = [];
  filteredOptions!: Observable<string[]>;
  myControl = new FormControl('');

  role: string | null = null;
  private policyService = inject(PolicyService);
  private roleService = inject(Roleservice);
  private router = inject(Router);

  ngOnInit() {
    this.role = this.roleService.getRole();

    this.policyService.getAllPlan().subscribe(data => {
      this.plans = data;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterPlans(value ?? ''))
      );
    });
  }

  private _filterPlans(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.plans
      .map(p => p.name)
      .filter(name => name.toLowerCase().includes(filterValue));
  }

  onOptionSelected(planName: string) {
    const plan = this.plans.find(p => p.name === planName);
    if (plan) {
      this.routeUser(plan.id);
    }
  }

  onEnter() {
    const planName = this.myControl.value;
    if (!planName) return;

    const plan = this.plans.find(p => p.name.toLowerCase() === planName.toLowerCase());
    if (plan) {
      this.routeUser(plan.id);
    }
  }



  routeUser(planId: number) {
    const selectedPlan = this.plans.find(p => p.id === planId);
    if (!selectedPlan) {
      return;
    }

    if (this.role === 'USER' || this.role === 'INSURANCE_AGENT') {
      this.router.navigate(['/enrollment', planId], { state: { plan: selectedPlan } });
    }
    else if (this.role === 'PROVIDER') {
      this.router.navigate(['/provider/details', planId], { state: { plan: selectedPlan } });
    }
    else if (this.role === 'ADMIN') {
      this.router.navigate(['/admin/plans'], { state: { plan: selectedPlan } });
    }
  }
}
