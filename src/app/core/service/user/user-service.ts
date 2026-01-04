import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CheckUserModel } from '../../model/user/check-user-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:9000/identityservice/api'

  getUserId(): string | null {
    return JSON.parse(localStorage.getItem('user') || 'null')?.id ?? null;
  }

  checkUser(request: CheckUserModel): Observable<String>{
    return this.http.post(`${this.baseUrl}/user/check/user`,request,{ responseType: 'text' });
  }
}
