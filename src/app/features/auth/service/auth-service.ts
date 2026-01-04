import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel, LoginResponse } from '../model/login-model';
import { Observable, tap } from 'rxjs';
import { RegisterModel } from '../model/register-model';
import { ForgotPasswordModel, OtpVerificationModel } from '../model/forgot-password-model';
import { Hospital } from '../../../core/model/provider/provider';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:9000/identityservice/api/auth';
  private providerUrl = 'http://localhost:9000/providerservice/api/provider/get/associated/hospital'

  login(request: LoginModel): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/signIn`, request)
    .pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      })
    );
  }
  
  register(request: RegisterModel): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/signUp`, request);
  }

  getOtp(email: string){
    return this.http.post<string>(`${this.baseUrl}/otp/generate/${email}`,{});
  }

  verifyOtp(request: OtpVerificationModel): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/otp/validate`, request);
  }

  forgotPassword(request: ForgotPasswordModel): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/forgot/password`, request);
  }

  getHospital(userId:string): Observable<Hospital>{
    return this.http.get<Hospital>(`${this.providerUrl}/${userId}`).
    pipe(
      tap(response => {
        localStorage.setItem('hospital', JSON.stringify(response));
      })
    );;
  }
}
