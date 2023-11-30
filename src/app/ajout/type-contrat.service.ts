import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TypeContratService {
  private apiUrl = 'http://localhost:8088/typeContrats';

  constructor(private http: HttpClient) {}

  getTypeContrats(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getcontrats(){
    return this.http.get(`${this.apiUrl}`)
  }
}


