// departement.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  private baseUrl = 'http://localhost:8088/departements/';

  constructor(private http: HttpClient) { }

  getAllDepartements(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

}
