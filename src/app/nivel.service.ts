import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NivelService {

  private baseUrl = 'http://localhost:8080/nivel';

  constructor(private http: HttpClient) { }

  getNivelList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
