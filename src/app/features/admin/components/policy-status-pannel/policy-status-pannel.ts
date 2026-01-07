import { AfterViewInit, Component, inject, OnDestroy } from '@angular/core';
import { Policy } from '../../service/policy/policy';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
@Component({
  selector: 'app-policy-status-pannel',
  imports: [],
  templateUrl: './policy-status-pannel.html',
  styleUrl: './policy-status-pannel.css',
})
export class PolicyStatusPannel implements AfterViewInit, OnDestroy  {
  private chart?: Chart;
  private readonly analyticsService = inject(Policy);

  ngAfterViewInit(): void {
    this.analyticsService.getPolicyStatusCounts().subscribe(data => {
      this.createChart(data);
    });
  }

  private createChart(data: { status: string; count: number }[]): void {
    const labels = data.map(d => d.status);
    const values = data.map(d => d.count);

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart('policyStatusChart', {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Policies',
          data: values
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: { precision: 0 }
          }
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }
}
