import { Resto } from 'src/app/models/resto';
import { Component, OnInit } from '@angular/core';
import { RestoService } from '../services/resto.service';

@Component({
  selector: 'app-restos',
  templateUrl: './restos.component.html',
  styleUrls: ['./restos.component.css']
})
export class RestosComponent implements OnInit {

  restos: Resto[];

  constructor(private restoService: RestoService) { }

  ngOnInit() {
    this.restoService.getRestos()
      .subscribe(restos => this.restos = restos);
  }

}
