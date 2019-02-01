import { baseURL } from './../models/baseurl';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Meal } from '../models/meal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  saveMeal(meal: Meal): Observable<Meal> {
    return this.http.post<Meal>(baseURL + 'meals/', meal, this.httpOptions);
  }

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(baseURL + 'meals');
  }

  getMeal(id: string): Observable<Meal> {
    return this.http.get<Meal>(baseURL + 'meals/' + id);
  }

  updateMeal(meal: Meal, id: string): Observable<Meal> {
    return this.http.put<Meal>(baseURL + 'meals/' + id, meal, this.httpOptions)
  }

  deleteMeal(meal: Meal, id: string): Observable<Meal> {
    return this.http.delete<Meal>(baseURL + 'meals/' + id, this.httpOptions);
  }

}
 