import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserId(): string | null {
    return JSON.parse(localStorage.getItem('user') || 'null')?.id ?? null;
  }
}
