import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanModel, PlolicyModel } from '../../model/policy/plolicy-model';

@Injectable({
  providedIn: 'root',
})
export class PolicyService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:9000/policyservice/api';

  getAllPlan(): Observable<PlanModel[]>{
    return this.http.get<PlanModel[]>(`${this.baseUrl}`+'/plan/get/all');
  }

  getPlan(planId:string): Observable<PlanModel>{
    return this.http.get<PlanModel>(`${this.baseUrl}/plan/get/${planId}`);
  }

  checkEnrollment(userId:string, planId:string): Observable<PlolicyModel>{
    return this.http.get<PlolicyModel>(`${this.baseUrl}/policy/check/enrollment/${userId}/${planId}`);
  }

  getAllEnrolledPlan(userId:string): Observable<PlolicyModel[]>{
    return this.http.get<PlolicyModel[]>(`${this.baseUrl}/policy/get/all/${userId}`);
  }
}
