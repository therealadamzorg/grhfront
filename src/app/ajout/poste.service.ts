import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poste } from './models';

@Injectable({
  providedIn: 'root',
})
export class PosteService {
  private baseUrl = 'http://localhost:8088';

  constructor(private http: HttpClient) {}

  getPostesForDepartement(departementId: number): Observable<Poste[]> {
    const url = `${this.baseUrl}/departements/${departementId}/postes`;
    return this.http.get<Poste[]>(url);
  }
}
