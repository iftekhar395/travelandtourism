import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusserviceFormComponent } from './busservice-form.component';

describe('BusserviceFormComponent', () => {
  let component: BusserviceFormComponent;
  let fixture: ComponentFixture<BusserviceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusserviceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusserviceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
