import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Responsable} from './models'

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  private apiUrl = 'http://localhost:8088/responsables';

  constructor(private httpClient: HttpClient) { }

  getAllResponsables(): Observable<Responsable[]> {
    return this.httpClient.get<Responsable[]>(this.apiUrl);
  }
}


