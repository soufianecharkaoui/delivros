
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resto } from '../models/resto';
import { baseURL } from '../models/baseurl';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  saveResto(resto: Resto): Observable<Resto> {
    return this.http.post<Resto>(baseURL + 'restos/', resto, this.httpOptions);
  }

  getRestos(): Observable<Resto[]> {
    return this.http.get<Resto[]>(baseURL + 'restos');
  }

  getResto(id: string): Observable<Resto> {
    return this.http.get<Resto>(baseURL + 'restos/' + id);
  }

  updateResto(resto: Resto, id: string): Observable<Resto> {
    return this.http.put<Resto>(baseURL + 'restos/' + id, resto, this.httpOptions)
  }

  deleteResto(resto: Resto, id: string): Observable<Resto> {
    return this.http.delete<Resto>(baseURL + 'restos/' + id, this.httpOptions);
  }

  
}
