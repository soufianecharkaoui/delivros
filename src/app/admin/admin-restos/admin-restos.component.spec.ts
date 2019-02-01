import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRestosComponent } from './admin-restos.component';

describe('AdminRestosComponent', () => {
  let component: AdminRestosComponent;
  let fixture: ComponentFixture<AdminRestosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRestosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
