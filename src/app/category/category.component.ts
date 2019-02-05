import { Category } from './../models/category';
import { RestoService } from './../services/resto.service';
import { MealService } from './../services/meal.service';
import { Component, OnInit, Inject } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Resto } from '../models/resto';
import { Meal } from '../models/meal';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  resto: Resto;
  category: Category;
  meals: Meal[];

  constructor(private mealService: MealService,
    private restoService: RestoService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.categoryService.getCategory(params['categoryId']);
      }))
      .subscribe(category => this.category = category);
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.restoService.getResto(params['restoId']);
      }))
      .subscribe(resto => {
        this.resto = resto;
        this.mealService.getMealsByCategory(resto, this.category)
          .subscribe(meals => this.meals = meals);
      });
  }

}
