import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asset } from '../Models/asset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  baseUrl: string = "http://localhost:5247/api/Asset";
  tokenKey: string = "myFSIToken";
  constructor(private http: HttpClient) { }

  getAllAssets(): Observable<Asset[]>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<Asset[]>(this.baseUrl, {headers: reqHeaders})
  }

  getAssetsByUsername(username: string): Observable<Asset[]>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<Asset[]>(`${this.baseUrl}/by-username/${username}`, {headers: reqHeaders})
  }

  getAssetsByUserId(userId: number): Observable<Asset[]>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<Asset[]>(`${this.baseUrl}/by-userId${userId}`, {headers: reqHeaders})
  }

  getAssetsById(assetId: number): Observable<Asset>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<Asset>(`${this.baseUrl}/by-assetId${assetId}`, {headers: reqHeaders})
  }

  createAsset(newAsset: Asset): Observable<Asset>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.post<Asset>(this.baseUrl, newAsset, {headers: reqHeaders})
  }

  updateAsset(id: number, newAsset: Asset): Observable<Asset>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.put(`${this.baseUrl}/${id}`, newAsset, {headers: reqHeaders})
  }

  deleteAsset(assetId: number): Observable<any>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.delete<any>(`${this.baseUrl}/${assetId}`, {headers: reqHeaders})
  }

  getBuckets(): Observable<Asset[]>{
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<Asset[]>(`${this.baseUrl}/buckets`, {headers: reqHeaders})
  }
}
