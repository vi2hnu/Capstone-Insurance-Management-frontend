import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanModel } from '../../model/policy/plolicy-model';

@Injectable({
  providedIn: 'root',
})
export class PolicyService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:9000/policyservice/api/plan/';

  getAllPlan(): Observable<PlanModel[]>{
    return this.http.get<PlanModel[]>(`${this.baseUrl}`+'/get/all');
  }

  getPlan(planId:string): Observable<PlanModel>{
    return this.http.get<PlanModel>(`${this.baseUrl}/get/${planId}`);
  }
}
