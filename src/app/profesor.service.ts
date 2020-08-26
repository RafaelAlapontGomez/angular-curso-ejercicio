import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  private baseUrl = 'http://localhost:8080/profesor';

  constructor(private http: HttpClient) { }

  getProfesorList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
