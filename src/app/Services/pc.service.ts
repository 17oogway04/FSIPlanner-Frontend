import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PC } from '../Models/pc';

@Injectable({
  providedIn: 'root'
})
export class PCService {

  baseUrl: string = "http://localhost:5247/api/PC";
  tokenKey: string = "myFSIToken";

  constructor(private http: HttpClient) { }

  getAllPC(): Observable<PC[]>{
    let reqHeaders =
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<PC[]>(this.baseUrl, {headers: reqHeaders})
  }

  getPCByUsername(username: string): Observable<PC[]>{
    let reqHeaders =
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<PC[]>(`${this.baseUrl}/by-username/${username}`, {headers: reqHeaders});
  }

  getPCByUserId(userId: number): Observable<PC[]>{
    let reqHeaders =
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<PC[]>(`${this.baseUrl}/by-userId${userId}`, {headers: reqHeaders})
  }

  getPCById(pcId: number): Observable<PC>{
    let reqHeaders =
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<PC>(`${this.baseUrl}/by-pcId${pcId}`, {headers: reqHeaders})
  }

  createPC(newPC: PC): Observable<PC>{
    let reqHeaders =
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.post<PC>(this.baseUrl, newPC, {headers: reqHeaders})
  }

  updatePC(id: number, newPC: PC): Observable<PC>{
    let reqHeaders =
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.put<PC>(`${this.baseUrl}/${id}`, newPC, {headers: reqHeaders})
  }

  deletePC(pcId: number): Observable<any>{
    let reqHeaders =
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.delete<any>(`${this.baseUrl}/${pcId}`, {headers: reqHeaders})
  }
}
