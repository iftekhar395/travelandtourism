import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayforbookComponent } from './payforbook.component';

describe('PayforbookComponent', () => {
  let component: PayforbookComponent;
  let fixture: ComponentFixture<PayforbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayforbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayforbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
