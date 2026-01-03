import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClaimRequest } from '../model/claim-request-model';

@Injectable({
  providedIn: 'root',
})
export class ClaimService {
  private http = inject(HttpClient);

  private claimBaseUrl = 'http://localhost:9000/claimsservice/api/claim';
  private uploadUrl = 'http://localhost:9000/claimsservice/api/media/upload';

  getAllClaimOfUser(userId: string) {
    return this.http.get<any[]>(`${this.claimBaseUrl}/user/${userId}`);
  }

  uploadDocument(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.uploadUrl}`,formData,{ responseType: 'text' });
  }

  addClaim(request: ClaimRequest): Observable<any> {
    return this.http.post(`${this.claimBaseUrl}/add`, request);
  }

}
