import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlolicyModel } from '../../../core/model/policy/plolicy-model';
import { PolicyEnrollmentModel } from '../model/policy-enrollment-model';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:9000/policyservice/api/policy';

  checkEnrollment(userId: string, planId: number): Observable<PlolicyModel> {
    return this.http.get<PlolicyModel>(
      `${this.baseUrl}/check/enrollment/${userId}/${planId}`
    );
  }

  enrollPlan(request: PolicyEnrollmentModel): Observable<PlolicyModel> {
    return this.http.post<PlolicyModel>(`${this.baseUrl}/enroll`, request);
  }

  renewPolicy(request: PolicyEnrollmentModel): Observable<PlolicyModel> {
    return this.http.post<PlolicyModel>(`${this.baseUrl}/renew`, request);
  }

  cancelPolicy(request: PolicyEnrollmentModel): Observable<PlolicyModel> {
    return this.http.delete<PlolicyModel>(`${this.baseUrl}/cancel`, { body: request });
  }

}
