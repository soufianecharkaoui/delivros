import { Router } from '@angular/router';
import { MealService } from './../../services/meal.service';
import { Meal } from './../../models/meal';
import { Category } from './../../models/category';
import { Resto } from './../../models/resto';
import { CategoryService } from './../../services/category.service';
import { RestoService } from 'src/app/services/resto.service';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-meals-form',
  templateUrl: './meals-form.component.html',
  styleUrls: ['./meals-form.component.css']
})
export class MealsFormComponent implements OnInit {
  
  mealForm: FormGroup;
  restos: Resto[];
  categories: Category[];
  meal: Meal;

  @ViewChild('mform') mealFormDiretive;

  constructor(private restoService: RestoService,
    private categoryService: CategoryService,
    private mealService: MealService,
    private fb: FormBuilder,
    private router: Router,
    @Inject('BaseURL') private BaseURL) { }

  createForm() {
    this.mealForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      restaurant: ['', Validators.required],
      category: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  get title() { return this.mealForm.get('title'); }
  get price() { return this.mealForm.get('price'); }
  get restaurant() { return this.mealForm.get('restaurant'); }
  get category() { return this.mealForm.get('category'); }
  get imageUrl() { return this.mealForm.get('imageUrl'); }

  ngOnInit() {
    this.createForm();
    this.restoService.getRestos()
      .subscribe(restos => this.restos = restos);
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  save() {
    this.meal = this.mealForm.value;
    this.mealService.saveMeal(this.meal)
      .subscribe(meal => {
        this.meal = meal;
        this.router.navigate(['/admin/meals']);
        this.mealService.getMeals()
          .subscribe();
      })
  }

}
