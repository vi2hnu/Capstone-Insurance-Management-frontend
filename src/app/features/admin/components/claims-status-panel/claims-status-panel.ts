import { Component, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { ClaimService } from '../../service/claims/claim-service';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-claims-status-panel',
  templateUrl: './claims-status-panel.html',
  styleUrl: './claims-status-panel.css',
})
export class ClaimsStatusPanel implements AfterViewInit, OnDestroy {

  private claimService = inject(ClaimService);
  private chart?: Chart;

  ngAfterViewInit(): void {
    this.claimService.getClaimsByStatus().subscribe(data => {
      this.renderChart(data);
    });
  }

  private renderChart(data: { status: string; count: number }[]): void {
    const labels = data.map(d => d.status);
    const values = data.map(d => d.count);

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart('claimsStatusChart', {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Claims',
          data: values
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              precision: 0
            }
          }
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }
}
