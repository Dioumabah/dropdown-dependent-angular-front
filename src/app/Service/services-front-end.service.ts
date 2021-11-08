import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DpeDce } from '../Models/dpe.dce.model';
import { DspeQuartier } from '../Models/dspe.quartier.model';
import { Ire } from '../Models/ire.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesFrontEndService {


  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getIreRegion(): Observable<Ire[]> {
    return this.http.get<Ire[]>(`${this.apiServerUrl}/ires`);
  }

  public getDpeDce(ireId: number): Observable<DpeDce[]> {
    return this.http.get<DpeDce[]>(`${this.apiServerUrl}/dpeDce/liste/${ireId}`);
  }

  public getDspeQuartier(dpeDceId: number): Observable<DspeQuartier[]> {
    return this.http.get<DspeQuartier[]>(`${this.apiServerUrl}/dspeQuartier/liste/${dpeDceId}`);
  }
}
