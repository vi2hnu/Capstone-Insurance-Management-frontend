import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClaimModel } from '../../../../core/model/claim/claim';

@Injectable({
  providedIn: 'root',
})
export class ClaimService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:9000/claimsservice/api/admin'

  getClaimsByStatus(): Observable<any>{
    return this.http.get(`${this.baseUrl}/get/claims/by-status`);
  }

  getClaimsByHospital(hospitalId: number, page: number, size: number): Observable<any> {
    const url = `${this.baseUrl}/claims/by-hospital/${hospitalId}?page=${page}&size=${size}`;
    return this.http.get<any>(url);
  }

  getTopClaims(): Observable<ClaimModel[]>{
    return this.http.get<ClaimModel[]>(`${this.baseUrl}/claims/high-value/last-month`);
  }
}
