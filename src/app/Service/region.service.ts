import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ire } from '../Models/ire.model';

@Injectable({
  providedIn: 'root'
})
export class RegionService {


  constructor(private http: HttpClient) { }

  getIres(): Observable<Ire[]> {
    let host = environment.apiBaseUrl;
    return this.http.get<Ire[]>(host + "api/ires");
  }
}
