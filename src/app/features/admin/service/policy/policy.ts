import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PlanModel } from '../../../../core/model/policy/plolicy-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Policy {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:9000/policyservice/api/admin'

  addPlan(request: PlanModel):Observable<PlanModel>{
    return this.http.post<PlanModel>(`${this.baseUrl}/plan/add`,request);
  }

}
