import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClaimRequest } from '../../model/claim/claim';

@Injectable({
  providedIn: 'root',
})
export class ClaimService {
  private readonly http = inject(HttpClient);
  private readonly claimBaseUrl = 'http://localhost:9000/claimsservice/api';
  private readonly uploadUrl = 'http://localhost:9000/claimsservice/api/media/upload';

  uploadDocument(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.uploadUrl}`, formData, { responseType: 'text' });
  }

  addClaim(request: ClaimRequest): Observable<any> {
    return this.http.post(`${this.claimBaseUrl}/claim/add`, request);
  }

  providerAddClaim(request: ClaimRequest) : Observable<any> {
    return this.http.post(`${this.claimBaseUrl}/provider/add/claim`, request);
  }
}
