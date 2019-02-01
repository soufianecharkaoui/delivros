import { RestoService } from './../../services/resto.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Resto } from 'src/app/models/resto';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-admin-restos',
  templateUrl: './admin-restos.component.html',
  styleUrls: ['./admin-restos.component.css']
})
export class AdminRestosComponent implements OnInit {

  restos: Resto[];
  dataSource: MatTableDataSource<Resto>;
  displayedColumns: string[] = ['imageUrl', 'name', 'edit'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private restoService: RestoService) {
    this.dataSource = new MatTableDataSource(this.restos);
  }

  ngOnInit() {
    this.restoService.getRestos()
      .subscribe(restos => {
        this.restos = restos;
        this.dataSource = new MatTableDataSource(restos);
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
