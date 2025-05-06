import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

interface TokenPayload{
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private tokenKey = 'myFSIToken';
  private userRole: string | null = null;
  constructor() {
    this.setRoleFromToken();
  }

  setRoleFromToken(): void{
    const token = localStorage.getItem('myFSIToken');
    if(token){
      const decoded = jwtDecode<TokenPayload>(token);
      this.userRole = decoded['role'] || decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      console.log('User role: ', this.userRole);
    }
  }

  getRole(): string | null {
    return this.userRole;
  }

  isAdmin(): boolean {
    return this.userRole === 'Admin';
  }

  isGeneralAdmin(): boolean {
    return this.userRole === 'GeneralAdmin';
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}
