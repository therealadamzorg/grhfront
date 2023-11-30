// nature-etudes.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NatureEtude } from './models';

@Injectable({
  providedIn: 'root'
})
export class NatureEtudesService {
  private apiUrl = 'http://localhost:8088/natureetudes';

  constructor(private httpClient: HttpClient) { }

  getNatureEtudes(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }
}
