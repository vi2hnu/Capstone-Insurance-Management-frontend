import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlolicyModel } from '../../../core/model/policy/plolicy-model';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:9000/policyservice/api/policy';

  checkEnrollment(userId: string, planId: number): Observable<PlolicyModel> {
    return this.http.get<PlolicyModel>(
      `${this.baseUrl}/check/enrollment/${userId}/${planId}`
    );
  }

  enrollPlan(userId: string, planId: number): Observable<PlolicyModel> {
    const payload = {
      userId: userId,
      planId: planId.toString(),
    };
    return this.http.post<PlolicyModel>(`${this.baseUrl}/enroll`, payload);
  }

  renewPolicy(userId: string, planId: number): Observable<PlolicyModel> {
    const payload = { userId, policyId: planId.toString() };
    return this.http.post<PlolicyModel>(`${this.baseUrl}/renew`, payload);
  }

  cancelPolicy(userId: string, planId: number): Observable<PlolicyModel> {
    const payload = { userId, policyId: planId.toString() };
    return this.http.delete<PlolicyModel>(`${this.baseUrl}/cancel`, { body: payload });
  }

}
