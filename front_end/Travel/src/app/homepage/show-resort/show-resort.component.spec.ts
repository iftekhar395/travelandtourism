import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowResortComponent } from './show-resort.component';

describe('ShowResortComponent', () => {
  let component: ShowResortComponent;
  let fixture: ComponentFixture<ShowResortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowResortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowResortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
