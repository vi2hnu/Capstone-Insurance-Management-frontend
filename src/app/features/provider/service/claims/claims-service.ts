import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ClaimModel } from '../../../../core/model/claim/claim';
import { Observable } from 'rxjs';
import { VerifyClaimModel } from '../../model/verify-claim-model';

@Injectable({
  providedIn: 'root',
})
export class ClaimsService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:9000/claimsservice/api/provider';

  getSubmittedClaims(hospitalId:string): Observable<ClaimModel[]>{
    return this.http.get<ClaimModel[]>(`${this.baseUrl}/get/submitted/claims/${hospitalId}`);
  }

  getClaimsForValidation(hospitalId:string):Observable<ClaimModel[]>{
    return this.http.get<ClaimModel[]>(`${this.baseUrl}/get/all/claims/${hospitalId}`);
  }

  verifyClaim(request:VerifyClaimModel):Observable<ClaimModel>{
    return this.http.put<ClaimModel>(`${this.baseUrl}/claim/verify`,request);
  }
  
}
