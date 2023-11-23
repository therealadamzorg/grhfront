// collaborateur.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collaborateur } from './collaborateur';


@Injectable({
  providedIn: 'root',
})
export class CollaborateurService {
  private baseUrl = 'http://localhost:8088/collaborateurs';

  constructor(private http: HttpClient) {}

  getCollaborateurs(): Observable<any[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<any[]>(url);
  }
  calculateTotalSalaireBrut(collaborateurs: Collaborateur[]): number {
    return collaborateurs.reduce((sum, collaborateur) => sum + collaborateur.salaireBrut, 0);
  }


}
