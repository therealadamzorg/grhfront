import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NiveauEtudesService {
  private apiUrl = 'http://localhost:8088/niveauetudes';

  constructor(private httpClient: HttpClient) { }

  getNiveauEtudes(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }
}
