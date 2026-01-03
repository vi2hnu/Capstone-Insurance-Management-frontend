import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Hospital } from '../../../../core/model/provider/provider';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Provider {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:9000/providerservice/api'

  getHospitals(): Observable<Hospital[]>{
    return this.http.get<Hospital[]>(`${this.baseUrl}/admin/get/all`)
  }

  mapUser(userId: string, hospitalId: string): Observable<any> {
    const payload = {userId: userId,hospitalId: hospitalId};
    return this.http.post(`${this.baseUrl}/admin/map/user`, payload);
  }
}
