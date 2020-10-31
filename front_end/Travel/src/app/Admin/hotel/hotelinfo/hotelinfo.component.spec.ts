import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelinfoComponent } from './hotelinfo.component';

describe('HotelinfoComponent', () => {
  let component: HotelinfoComponent;
  let fixture: ComponentFixture<HotelinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
