import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Life } from '../Models/life';

@Injectable({
  providedIn: 'root'
})
export class LifeService {
  baseUrl: string = "http://localhost:5247/api/Life";
  tokenKey: string = "myFSIToken";
  constructor(private http: HttpClient) { }

  updateLife(id: number, newLife: Life): Observable<Life>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }

    return this.http.put(`${this.baseUrl}/${id}`, newLife, {headers: reqHeaders})
  }

  getLifeById(id: number): Observable<Life>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }

    return this.http.get<Life>(`${this.baseUrl}/by-lifeId${id}`, {headers: reqHeaders})
  }

  getLifeByUsername(username: string): Observable<Life[]>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }

    return this.http.get<Life[]>(`${this.baseUrl}/by-username/${username}`, {headers: reqHeaders})
  }

  createLife(newLife: Life): Observable<Life>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.post<Life>(this.baseUrl, newLife, {headers: reqHeaders})
  }

  deleteLife(lifeId: number): Observable<any>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.delete<any>(`${this.baseUrl}/${lifeId}`, {headers: reqHeaders})

  }
}
