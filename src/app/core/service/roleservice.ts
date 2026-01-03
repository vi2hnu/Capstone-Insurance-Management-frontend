import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Roleservice {
  getRole(): string | null {
    return JSON.parse(localStorage.getItem('user') || 'null')?.role ?? null;
  }
}
