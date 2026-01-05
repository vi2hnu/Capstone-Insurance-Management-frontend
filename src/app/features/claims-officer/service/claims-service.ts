import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClaimModel } from '../../../core/model/claim/claim'
import { ClaimReviewModel } from '../model/claim-review-model';

@Injectable({
  providedIn: 'root',
})
export class ClaimService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:9000/claimsservice/api/claims-officer';

  getClaims(): Observable<ClaimModel[]> {
    return this.http.get<ClaimModel[]>(`${this.baseUrl}/get/all/claim`);
  }

  validateClaim(payload: ClaimReviewModel): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/validate/claim`,payload);
  }
}
