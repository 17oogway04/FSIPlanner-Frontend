import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Notes } from '../Models/notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  baseUrl: string = "http://localhost:5247/api/Notes";
  tokenKey: string = "myFSIToken";

  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<Notes[]>{
    let reqHeaders =
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<Notes[]>(this.baseUrl, {headers: reqHeaders});
  }

  GetNotesByUsername(username: string): Observable<Notes[]>{
    let reqHeaders =
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<Notes[]>(`${this.baseUrl}/by-username/${username}`, {headers: reqHeaders}).pipe(
      map(notes => notes.map(note => ({
        ...note,
        createdAt: new Date(note.createdAt!)
      })))
    )
  }

  GetNotesByUserId(userId: string): Observable<Notes[]>{
    let reqHeaders =
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<Notes[]>(`${this.baseUrl}/by-userId/${userId}`, {headers: reqHeaders})
  }

  GetNotesById(notesId: number): Observable<Notes>{
    let reqHeaders =
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<Notes>(`${this.baseUrl}/by-notesId/${notesId}`, {headers: reqHeaders})
  }

  CreateNote(newNote: Notes): Observable<Notes>{
    let reqHeaders =
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    newNote.createdAt?.toISOString();
    return this.http.post<Notes>(this.baseUrl, newNote, {headers: reqHeaders})
  }

  UpdateNote(id: number, newNote: Notes): Observable<Notes>{
    let reqHeaders =
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.put<Notes>(`${this.baseUrl}/${id}`, newNote, {headers: reqHeaders})
  }

  DeleteNote(notesId: number): Observable<any>{
    let reqHeaders =
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.delete<any>(`${this.baseUrl}/${notesId}`, {headers: reqHeaders})
  }

}
