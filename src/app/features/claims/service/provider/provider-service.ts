import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HospitalNetworkModel } from '../../../../core/model/provider/provider';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:9000/providerservice/api/provider'

  getAllProvidersPlan(planId: number): Observable<HospitalNetworkModel[]>{
    return this.http.get<HospitalNetworkModel[]>(`${this.baseUrl}/get/all/${planId}`);
  }
}
