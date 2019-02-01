import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { baseURL } from '../models/baseurl';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  saveCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(baseURL + 'categories/', category, this.httpOptions);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(baseURL + 'categories');
  }

  getCategory(id: string): Observable<Category> {
    return this.http.get<Category>(baseURL + 'categories/' + id);
  }

  updateCategory(category: Category, id: string): Observable<Category> {
    return this.http.put<Category>(baseURL + 'categories/' + id, category, this.httpOptions)
  }

  deleteCategory(category: Category, id: string): Observable<Category> {
    return this.http.delete<Category>(baseURL + 'categories/' + id, this.httpOptions);
  }

}
