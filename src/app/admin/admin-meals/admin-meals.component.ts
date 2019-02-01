import { Meal } from './../../models/meal';
import { MealService } from './../../services/meal.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-admin-meals',
  templateUrl: './admin-meals.component.html',
  styleUrls: ['./admin-meals.component.css']
})
export class AdminMealsComponent implements OnInit {

  meals: Meal[];
  dataSource: MatTableDataSource<Meal>;
  displayedColumns: string[] = ['imageUrl', 'title', 'price', 'edit'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private mealService: MealService) {  
    this.dataSource = new MatTableDataSource(this.meals);
  }

  ngOnInit() {
    this.mealService.getMeals()
      .subscribe(meals => {
        this.meals = meals;
        this.dataSource = new MatTableDataSource(meals);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
