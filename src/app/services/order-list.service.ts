import { OrderList } from './../models/order-list';
import { baseURL } from './../models/baseurl';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  orderList: OrderList;
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  createList(orderList: OrderList): Observable<OrderList> {
    return this.http.post<OrderList>(baseURL + 'order-lists/', orderList, this.httpOptions);
  }

  getList(listId: string): Observable<OrderList> { 
    return this.http.get<OrderList>(baseURL + 'order-lists/' + listId);
  }

 /* addMealToList(orderList: OrderList): Observable<OrderList> {
    return this.http.put<OrderList>
  } */
}
