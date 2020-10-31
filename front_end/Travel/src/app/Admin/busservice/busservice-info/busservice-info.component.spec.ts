import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusserviceInfoComponent } from './busservice-info.component';

describe('BusserviceInfoComponent', () => {
  let component: BusserviceInfoComponent;
  let fixture: ComponentFixture<BusserviceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusserviceInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusserviceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
