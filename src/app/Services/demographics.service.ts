import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Demographics } from '../Models/demographics';
import { Observable, from, map } from 'rxjs';
import { Dialog } from '@capacitor/dialog';

@Injectable({
  providedIn: 'root'
})
export class DemographicsService {

  baseUrl: string = "http://localhost:5247/api/Demographics";
  tokenKey: string = "myFSIToken";
  constructor(private http: HttpClient) { }

  getAllDemographics(): Observable<Demographics[]>{
    let reqHeaders = 
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<Demographics[]>(this.baseUrl, {headers: reqHeaders});
  }

  GetDemographicsByUsername(username: string): Observable<Demographics[]>{
    let reqHeaders = 
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<Demographics[]>(`${this.baseUrl}/by-username/${username}`, {headers: reqHeaders})
  }

  GetDemographicsByUserId(userId: string): Observable<Demographics[]>{
    let reqHeaders = 
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<Demographics[]>(`${this.baseUrl}/${userId}`, {headers: reqHeaders})
  }

  GetDemographicsById(demographicsId: number): Observable<Demographics>{
    let reqHeaders = 
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<Demographics>(`${this.baseUrl}/${demographicsId}`, {headers: reqHeaders})
  }

  CreateDemographic(newDemographic: Demographics): Observable<Demographics>{
    let reqHeaders = 
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }

    return this.http.post<Demographics>(this.baseUrl, newDemographic, {headers: reqHeaders})

  }

  UpdateDemographic(username: string, newDemographic: Demographics): Observable<Demographics>{
    let reqHeaders = 
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.put<Demographics>(`${this.baseUrl}/demographicUsername/${username}`, newDemographic, {headers: reqHeaders})
  }

  DeleteDemographic(demographicsId: number): Observable<any>{
    let reqHeaders = 
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.delete<any>(`${this.baseUrl}/${demographicsId}`, {headers: reqHeaders})
  }

}
