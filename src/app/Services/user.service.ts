import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, tap } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:5247/api/user"
  tokenKey: string = "myFSIToken";
  public isLoggedInSubj = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }


  uploadProfilePicture(file: File): Observable<any>{
    const formData = new FormData();
    formData.append('file', file);
    let reqHeaders = 
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.post(`${this.baseUrl}/upload-profile-picture`, formData, {headers: reqHeaders});
  }  
  register(newUser: User){
    let reqHeaders = 
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.post(`${this.baseUrl}/register`, newUser, {headers: reqHeaders});
  }

  login(username: string, password: string)
  {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('username', username);
    queryParams = queryParams.append('password', password);

    return this.http.get(`${this.baseUrl}/login`, {params: queryParams, responseType: 'text'})
      .pipe(tap((response: any) => {
        localStorage.setItem('myFSIToken', response);
        this.isLoggedInSubj.next(true);
      }));
  }

  getCurrentUser(): Observable<User>{
    let reqHeaders = 
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }

    return this.http.get<User>(`${this.baseUrl}/current`, {headers: reqHeaders})
      .pipe(tap((response: any) => {
        // console.log(response);
      }))
  }

  getUsers(): Observable<User[]>{
    //may need authorization as well
    let reqHeaders = 
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<User[]>(this.baseUrl, {headers: reqHeaders});
  }
  
  getUserByName(name: string): Observable<User[]>{
    let reqHeaders = 
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<User[]>(`${this.baseUrl}/${name}`, {headers: reqHeaders}
    );
  }

  getUserByUsername(username: string): Observable<User>{
    let reqHeaders = 
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<User>(`${this.baseUrl}/by-username/${username}`, {headers: reqHeaders}
    );
  }

  getUserByUserId(id: number): Observable<User>{
    let reqHeaders = 
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<User>(`${this.baseUrl}/by-userId/${id}?userId=${id}`, {headers: reqHeaders})
  }

  logout(){
    this.isLoggedInSubj.next(false);
    localStorage.removeItem('myFSIToken')
    if(localStorage.getItem('myFSIToken') === null){
      console.log('Successfully logged out')
    }
    this.router.navigate(['/login'])
  }

  deleteUser(username: string): Observable<any>{
    let reqHeaders = 
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
   return this.http.delete<any>(`${this.baseUrl}/${username}`, {headers: reqHeaders})
  }

  updateUser(newUser: User): Observable<User>{
    let reqHeaders = 
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.put<User>(`${this.baseUrl}/${newUser.userId}`, newUser, {headers: reqHeaders})
  }

}
