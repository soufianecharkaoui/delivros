import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { ActivatedRoute, Params } from '@angular/router';
import { MealService } from './../services/meal.service';
import { Meal } from './../models/meal';
import { Component, OnInit, Inject } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { RestoService } from '../services/resto.service';
import { Resto } from '../models/resto';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  meals: Meal[];
  resto: Resto;
  filteredNamesCategories: string[] = [];
  categories: Category[];
  filteredImagesCategories: string[] = [];
  filteredIdCategories: string[] = [];
  filteredCategories: Object[] = [];

  constructor(private mealService: MealService,
    private restoService: RestoService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.restoService.getResto(params['id']);
      }))
      .subscribe(resto => {
        this.mealService.getMealsByResto(resto)
          .subscribe(meals => {
            this.meals = meals;
          });
        this.categoryService.getCategories()
          .subscribe(categories => {
            this.resto = resto;
            this.categories = categories;
            this.displayCategories(); 
          });
      });
  }

  displayCategories() {
    let preCategories: string[] = [];
    for (let i = 0; i < this.meals.length; i++) {
      for (let j = 0; j < i; j++) {
        if (this.meals[i].category === this.meals[j].category)
          this.meals[i].category = '0';
      }
      if (this.meals[i].category !== '0')
        preCategories.push(this.meals[i].category);
    }
    for (let i = 0; i < this.categories.length; i++) {
      for (let j = 0; j < preCategories.length; j++) {
        if (this.categories[i].name === preCategories[j]) {
          this.filteredImagesCategories.push(this.categories[i].imageUrl);
          this.filteredIdCategories.push(this.categories[i].id);
          this.filteredNamesCategories.push(this.categories[i].name);
        }
      }
    }
    for (let i = 0; i < this.filteredIdCategories.length; i++) {
      this.filteredCategories.push({
        "name": this.filteredNamesCategories[i],
        "imageUrl": this.filteredImagesCategories[i],
        "id": this.filteredIdCategories[i]
      });
    }
  }
}
