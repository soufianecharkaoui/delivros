import { CategoryService } from './../../services/category.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {

  categoryForm: FormGroup;
  category: Category;

  constructor(private categoryService: CategoryService,
    private router: Router,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  get name() { return this.categoryForm.get('name'); }
  get imageUrl() { return this.categoryForm.get('imageUrl'); }

  save() {
    this.category = this.categoryForm.value;
    this.categoryService.saveCategory(this.category)
      .subscribe(category => {
        this.category = category;
        this.router.navigate(['/admin/categories']);
        this.categoryService.getCategories()
          .subscribe();
      })
  }

}
