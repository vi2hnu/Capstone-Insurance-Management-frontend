import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PlanModel } from '../../../../core/model/policy/plolicy-model';
import { Observable } from 'rxjs';
import { TopPlan } from '../../model/top-plan';

@Injectable({
  providedIn: 'root',
})
export class Policy {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:9000/policyservice/api/admin'

  addPlan(request: PlanModel):Observable<PlanModel>{
    return this.http.post<PlanModel>(`${this.baseUrl}/plan/add`,request);
  }

  getPolicyStatusCounts(): Observable<any>{
    return this.http.get(`${this.baseUrl}/get/policies/by-status`);
  }

  getTopPlans(): Observable<TopPlan[]>{
    return this.http.get<TopPlan[]>(`${this.baseUrl}/plan/analytics`);
  }
}
