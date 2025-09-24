import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcctMovement } from '../Models/acct-movement';

@Injectable({
  providedIn: 'root'
})
export class AcctMovementService {
  baseUrl: string = "http://localhost:5247/api/AcctMovement";
  tokenKey: string = "myFSIToken";

  constructor(private http: HttpClient) { }

  getAllAcctMovements(): Observable<AcctMovement[]> {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<AcctMovement[]>(this.baseUrl, { headers: reqHeaders })
  }

  getAcctMovementByUsername(username: string): Observable<AcctMovement[]> {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<AcctMovement[]>(`${this.baseUrl}/by-username/${username}`, { headers: reqHeaders })
  }

  getAcctMovementByUserId(userId: number): Observable<AcctMovement[]> {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<AcctMovement[]>(`${this.baseUrl}/by-userId${userId}`, { headers: reqHeaders })
  }

  getAcctMovementById(acctId: number): Observable<AcctMovement> {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<AcctMovement>(`${this.baseUrl}/by-acctId${acctId}`, { headers: reqHeaders })
  }

  createAcctMovementNote(newAcctMovement: AcctMovement): Observable<AcctMovement> {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.post<AcctMovement>(this.baseUrl, newAcctMovement, { headers: reqHeaders })
  }

  updateAcctMovement(id: number, newAcctMovement: AcctMovement): Observable<AcctMovement> {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.put(`${this.baseUrl}/${id}`, newAcctMovement, { headers: reqHeaders })
  }

  deleteAcctMovement(acctId: number): Observable<any> {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.delete<any>(`${this.baseUrl}/${acctId}`, { headers: reqHeaders })
  }
}
