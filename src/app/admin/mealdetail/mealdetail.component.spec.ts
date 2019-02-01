import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealdetailComponent } from './mealdetail.component';

describe('MealdetailComponent', () => {
  let component: MealdetailComponent;
  let fixture: ComponentFixture<MealdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
