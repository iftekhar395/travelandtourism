import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCarsComponent } from './show-cars.component';

describe('ShowCarsComponent', () => {
  let component: ShowCarsComponent;
  let fixture: ComponentFixture<ShowCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
