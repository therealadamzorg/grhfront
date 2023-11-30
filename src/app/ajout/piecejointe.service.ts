import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PieceJointe, Poste } from './models';

@Injectable({
  providedIn: 'root',
})
export class PieceJointeService {
  private baseUrl = 'http://localhost:8088';

  constructor(private http: HttpClient) {}

  getPieceJointeForTypeContrat(TypeContratId: number): Observable<PieceJointe[]> {
    const url = `${this.baseUrl}/typeContrats/getPiecesBycontrat/${TypeContratId}`;
    return this.http.get<PieceJointe[]>(url);
  }
}
