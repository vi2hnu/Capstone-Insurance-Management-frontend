import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel, LoginResponse } from '../model/login-model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:9000/identityservice/api/auth';

  login(request: LoginModel): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/signIn`, request)
    .pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      })
    );
  }
  
}
