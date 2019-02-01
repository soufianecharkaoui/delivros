import { Category } from 'src/app/models/category';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

  categories: Category[];
  dataSource: MatTableDataSource<Category>;
  displayedColumns: string[] = ['imageUrl', 'name', 'edit'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private categoryService: CategoryService) {
    this.dataSource = new MatTableDataSource(this.categories);
  }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(categories => {
        this.categories = categories;
        this.dataSource = new MatTableDataSource(categories);
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
