import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Billing {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:9000/billingservice/api/payment';

  createOrder(userId: string, amount: number,purpose:string): Observable<any> {
    const request = {userId,amount,purpose};

    return this.http.post<any>(`${this.baseUrl}/create/order`, request);
  }

  verifyPayment(request: {razorpayOrderId: string; razorpayPaymentId: string; razorpaySignature: string;}) {
  return this.http.post(`${this.baseUrl}/verify/order`,request);
}
}
