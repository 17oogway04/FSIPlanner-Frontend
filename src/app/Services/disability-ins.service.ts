import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disability } from '../Models/disability';

@Injectable({
  providedIn: 'root'
})
export class DisabilityInsService {
  baseUrl: string = "http://localhost:5247/api/DisabilityIns"
  tokenKey: string = "myFSIToken";
  constructor(private http: HttpClient) { }

  getAllDisability(): Observable<Disability[]>
  {
    let reqHeaders = 
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<Disability[]>(this.baseUrl, {headers: reqHeaders});
  }

  getDisabilityByUsername(username: string): Observable<Disability[]>{
    let reqHeaders =
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<Disability[]>(`${this.baseUrl}/by-username/${username}`, {headers: reqHeaders});
  }

  createDisabilityIns(newDisabilityIns: Disability): Observable<Disability>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.post<Disability>(this.baseUrl, newDisabilityIns, {headers: reqHeaders})
  }
  deleteDisability(disabilityId: number): Observable<any>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.delete<any>(`${this.baseUrl}/${disabilityId}`, {headers: reqHeaders})
  }
  getDisabilityById(disabilityId: number): Observable<Disability>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<Disability>(`${this.baseUrl}/by-disabilityId${disabilityId}`, {headers: reqHeaders})
  }

  updateDisability(id: number, newDisability: Disability): Observable<Disability>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.put(`${this.baseUrl}/${id}`, newDisability, {headers: reqHeaders})

  }


}
