import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ire } from '../Models/ire.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IreService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getIreRegion(): Observable<Ire[]> {
    return this.http.get<Ire[]>(`${this.apiServerUrl}/ires`);
  }
}
