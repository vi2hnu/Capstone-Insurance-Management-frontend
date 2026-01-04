import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered-plan-component',
  imports: [],
  templateUrl: './registered-plan-component.html',
  styleUrl: './registered-plan-component.css',
})
export class RegisteredPlanComponent {
  @Input() planId!: number;
  @Input() type!: string;
  router = inject(Router);

  makeClaim(){
    this.router.navigate(['/provider/claim',this.planId])
  }

}
