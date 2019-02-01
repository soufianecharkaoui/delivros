import { Router } from '@angular/router';
import { RestoService } from 'src/app/services/resto.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Resto } from 'src/app/models/resto';

@Component({
  selector: 'app-restos-form',
  templateUrl: './restos-form.component.html',
  styleUrls: ['./restos-form.component.css']
})
export class RestosFormComponent implements OnInit {

  restoForm: FormGroup;
  resto: Resto;

  constructor(private restoService: RestoService,
    private router: Router,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.restoForm = this.fb.group({
      name: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  get name() { return this.restoForm.get('name'); }
  get imageUrl() { return this.restoForm.get('imageUrl'); }

  save() {
    this.resto = this.restoForm.value;
    this.restoService.saveResto(this.resto)
      .subscribe(resto => {
        this.resto = resto;
        this.router.navigate(['/admin/restos']);
        this.restoService.getRestos()
          .subscribe();
      })
  }

}
