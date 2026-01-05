import { Component, inject, OnInit } from '@angular/core';
import { TopPlan } from '../../model/top-plan';
import { Policy } from '../../service/policy/policy';

@Component({
  selector: 'app-top-plans-panel',
  imports: [],
  templateUrl: './top-plans-panel.html',
  styleUrl: './top-plans-panel.css',
})
export class TopPlansPanel implements OnInit{
  topPlans: TopPlan[] = []
  analyticService = inject(Policy);

  ngOnInit() {
    this.analyticService.getTopPlans().subscribe(data => {
      this.topPlans = data;
    });
  }
}
