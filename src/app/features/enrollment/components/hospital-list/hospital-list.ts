import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HospitalNetworkModel } from '../../../../core/model/provider/provider';
import { ProviderService } from '../../service/provider/provider-service';

@Component({
  selector: 'app-hospital-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hospital-list.html',
  styleUrl: './hospital-list.css',
})
export class HospitalList implements OnInit {
  @Input() planId!: number;
  
  hospitals: HospitalNetworkModel[] = [];
  isLoading = true;
  
  private providerService = inject(ProviderService);

  ngOnInit(): void {
    this.providerService.getProviderForPlan(this.planId).subscribe({
      next: (response) => {
        this.hospitals = response;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load hospitals', err);
        this.isLoading = false;
      }
    });
  }
}