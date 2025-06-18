import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AppSecurityService {

  private readonly _isAuthenticated = signal(true);

  get isAuthenticated() {
    return this._isAuthenticated.asReadonly();
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '123') {
      this._isAuthenticated.set(true);
      return true;
    }
    return false;
  }

  logout(): void {
    this._isAuthenticated.set(false);
  }
}
