import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestosFormComponent } from './restos-form.component';

describe('RestosFormComponent', () => {
  let component: RestosFormComponent;
  let fixture: ComponentFixture<RestosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
