import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:9000/providerservice/api/provider';

  checkPlan(planId: string, hospitalId: string): Observable<string> {
    return this.http.get(`${this.baseUrl}/get/type/${planId}/${hospitalId}`, { responseType: 'text' });
  }

  registerPlan(userId: string, hospitalId: string, planId: string,networkType: string): Observable<any> {
    const body = {userId,hospitalId,planId,networkType,};
    return this.http.post(`${this.baseUrl}/authority/register/plan`,body);
  }
}
