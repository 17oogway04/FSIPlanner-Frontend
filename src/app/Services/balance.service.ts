import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Balance } from '../Models/balance';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  baseUrl: string = "http://localhost:5247/api/Balance";
  tokenKey: string = "myFSIToken";
  constructor(private http: HttpClient) { }

  getBalancesByUsername(username: string): Observable<Balance[]>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<Balance[]>(`${this.baseUrl}/by-username/${username}`, {headers: reqHeaders})
  }

  updateBalances(username: string): Observable<Balance>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.post<Balance>(`${this.baseUrl}/update-balances/${username}`, {}, {headers: reqHeaders})
  }
}
