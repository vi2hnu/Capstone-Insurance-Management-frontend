import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClaimModel } from '../model/claim-model';

@Injectable({
  providedIn: 'root',
})
export class ClaimService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:9000/claimsservice/api/claims-officer';

  getClaims(): Observable<ClaimModel[]> {
    return this.http.get<ClaimModel[]>(`${this.baseUrl}/get/all/claim`);
  }
}
