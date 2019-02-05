import { MealService } from './../services/meal.service';
import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../models/meal';
import { OrderListService } from '../services/order-list.service';
import { OrderList } from '../models/order-list';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.css']
})
export class MealCardComponent implements OnInit {

  orderList: OrderList;
  orderListCopy: OrderList;
  @Input('meal') meal: Meal;
  meals: Meal[] = []

  constructor(private orderListService: OrderListService,
    private mealService: MealService) { }

  ngOnInit() {
  }

  addToList(meal: Meal) {
    let listId = localStorage.getItem('listId');
    this.mealService.getMeal(meal.id)
      .subscribe(meal => {
        this.orderListCopy.meals.push(meal);
        console.log(meal);
        console.log(this.orderListCopy);
        /*setTimeout(() => {
          this.orderListCopy.meals.push(this.meal);
          console.log(this.orderListCopy);
        }, 5000);*/
      });
    
    
    
    /*if (!listId) {
      this.orderListService.createList(this.orderList)
        .subscribe(orderList => {
          this.orderList = orderList;
          console.log(orderList);
          localStorage.setItem('listId', orderList.id);
        });
        // Add an order list
    } else {
      // Add an order list
    }*/
    
  }

}
