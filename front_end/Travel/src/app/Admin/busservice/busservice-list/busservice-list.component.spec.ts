import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusserviceListComponent } from './busservice-list.component';

describe('BusserviceListComponent', () => {
  let component: BusserviceListComponent;
  let fixture: ComponentFixture<BusserviceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusserviceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusserviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
