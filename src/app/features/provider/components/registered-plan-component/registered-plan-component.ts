import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registered-plan-component',
  imports: [],
  templateUrl: './registered-plan-component.html',
  styleUrl: './registered-plan-component.css',
})
export class RegisteredPlanComponent {
  @Input() planId!: number;
  @Input() type!: string;
  
}
