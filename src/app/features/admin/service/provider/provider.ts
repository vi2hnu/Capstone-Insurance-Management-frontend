import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Hospital } from '../../../../core/model/provider/provider';
import { Observable } from 'rxjs';
import { CreateHospital } from '../../model/create-hospital';

@Injectable({
  providedIn: 'root',
})
export class Provider {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:9000/providerservice/api/admin'

  getHospitals(): Observable<Hospital[]>{
    return this.http.get<Hospital[]>(`${this.baseUrl}/get/all`)
  }

  mapUser(userId: string, hospitalId: string): Observable<any> {
    const payload = {userId: userId,hospitalId: hospitalId};
    return this.http.post(`${this.baseUrl}/map/user`, payload);
  }

  addHospital(request: CreateHospital): Observable<Hospital>{
    return this.http.post<Hospital>(`${this.baseUrl}/add/hospital`,request);
  }
}
