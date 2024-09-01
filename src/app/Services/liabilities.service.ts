import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Liabilities } from '../Models/liabilities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiabilitiesService {
  baseUrl: string = "http://localhost:5247/api/Liabilities";
  tokenKey: string = "myFSIToken";
  constructor(private http: HttpClient) { }

  getLiabilitiesByUsername(username: string): Observable<Liabilities[]>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }

    return this.http.get<Liabilities[]>(`${this.baseUrl}/by-username/${username}`, {headers: reqHeaders})
  }

  createLiability(newLiability: Liabilities): Observable<Liabilities>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.post<Liabilities>(this.baseUrl, newLiability, {headers: reqHeaders})
  }

  updateLiability(id: number, newLiability: Liabilities): Observable<Liabilities>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.put(`${this.baseUrl}/${id}`, newLiability, {headers: reqHeaders})

  }

  deleteLiability(liabilityId: number): Observable<any>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.delete<any>(`${this.baseUrl}/${liabilityId}`, {headers: reqHeaders})
  }
}
