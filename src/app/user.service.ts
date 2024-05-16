import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  private connected: boolean = false;
  private role: string = 'admin';
  getRole() {
    return this.role;
  }
  checkRole(): string {
    return this.role;
  }
  isConnected(): boolean {
    return this.connected;
  }
  logIn(): boolean {
    return (this.connected = true);
  }
  logOut(): boolean {
    return (this.connected = false);
  }
}
