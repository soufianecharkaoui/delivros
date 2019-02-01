import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestodetailComponent } from './restodetail.component';

describe('RestodetailComponent', () => {
  let component: RestodetailComponent;
  let fixture: ComponentFixture<RestodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestodetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
