import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from './curso';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private baseUrl = 'http://localhost:8080/curso';
  private apiEndpoint: string;


  constructor(private http: HttpClient) {
    this.apiEndpoint = this.baseUrl + '/pagination';
   }

  getCursoList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createCurso(curso: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}`, curso);
  }

  getCursoListPagination(sort: string = '', order: string = '', page: number = 1, perPage: number = 5, initTotal: Function = () => {}): Observable<any> {
    return this.http.get(this.apiEndpoint +'?' + CursoService.createUrlQuery({sort: {field: sort, order: order}, pagination: { page, perPage }}));
  }


  static createUrlQuery(params: any) {

        if (!params) {
            return "";
        }

        let page;
        let perPage;
        let field;
        let order;
        let query: any = {};
        if (params.pagination) {
             page = params.pagination.page;
             perPage =  params.pagination.perPage;
             query.range = JSON.stringify([
                page,
                perPage,
            ]);
        }
        if (params.sort) {
            field = params.sort.field;
            order = params.sort.order;
            if (field && order) {
                query.sort = JSON.stringify([field, order]);
            }
            else {
                query.sort = JSON.stringify(['id', 'ASC']);
            }
        }
        if (!params.filter) {
            params.filter = {};
        }
        if (Array.isArray(params.ids)) {
            params.filter.id = params.ids;
        }

        if (params.filter) {
            query.filter = JSON.stringify(params.filter)
        }
        console.log(query, stringify(query));
        return stringify(query);
    }
}
