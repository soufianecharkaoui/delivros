import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-categorydetail',
  templateUrl: './categorydetail.component.html',
  styleUrls: ['./categorydetail.component.css']
})
export class CategorydetailComponent implements OnInit {

  categoryForm: FormGroup;
  category: Category;

  constructor(private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.createForm();
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.categoryService.getCategory(params['id']);
      }))
      .subscribe(category => this.category = category);
  }

  createForm() {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  get name() { return this.categoryForm.get('name'); }
  get imageUrl() { return this.categoryForm.get('imageUrl'); }

  update() {
    this.category = this.categoryForm.value;
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.categoryService.updateCategory(this.category, params['id']);
      }))
      .subscribe(category => {
        this.category = category;
        this.router.navigate(['/admin/categories']);
        this.categoryService.getCategories()
          .subscribe();
      })
  }

  delete() {
    this.category = this.categoryForm.value;
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.categoryService.deleteCategory(this.category, params['id']);
      }))
      .subscribe(() => {
        this.router.navigate(['/admin/categories']);
        this.categoryService.getCategories()
          .subscribe();
      })
  }

}
