import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private baseUrl = 'http://localhost:8080/curso';

  constructor(private http: HttpClient) { }

  getCursoList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createCurso(curso: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, curso);
  }
}
