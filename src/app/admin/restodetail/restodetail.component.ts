import { RestoService } from './../../services/resto.service';
import { Resto } from './../../models/resto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-restodetail',
  templateUrl: './restodetail.component.html',
  styleUrls: ['./restodetail.component.css']
})
export class RestodetailComponent implements OnInit {

  restoForm: FormGroup;
  resto: Resto;

  constructor(private restoService: RestoService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.createForm();
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.restoService.getResto(params['id']);
      }))
      .subscribe(resto => this.resto = resto);
  }

  createForm() {
    this.restoForm = this.fb.group({
      name: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  get name() { return this.restoForm.get('name'); }
  get imageUrl() { return this.restoForm.get('imageUrl'); }

  update() {
    this.resto = this.restoForm.value;
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.restoService.updateResto(this.resto, params['id']);
      }))
      .subscribe(resto => {
        this.resto = resto;
        this.router.navigate(['/admin/restos']);
        this.restoService.getRestos()
          .subscribe();
      })
  }

  delete() {
    this.resto = this.restoForm.value;
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.restoService.deleteResto(this.resto, params['id']);
      }))
      .subscribe(() => {
        this.router.navigate(['/admin/restos']);
        this.restoService.getRestos()
          .subscribe();
      })
  }

}
