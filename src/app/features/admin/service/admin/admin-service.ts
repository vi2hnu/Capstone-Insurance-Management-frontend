import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CreateUser } from '../../pages/create-user/create-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:9000/identityservice/api'

  addUser(request: CreateUser): Observable<any>{
    return this.http.post(`${this.baseUrl}/admin/create/user`,request);
  }
}
