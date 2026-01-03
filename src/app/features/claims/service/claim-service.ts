import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClaimModel } from '../../../core/model/claim/claim';

@Injectable({
  providedIn: 'root',
})
export class ClaimService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:9000/claimsservice/api/claim/'

  getAllClaimOfUser(userId: string): Observable<ClaimModel[]>{
    return this.http.get<ClaimModel[]>(`${this.baseUrl}/user/${userId}`);
  }
}
