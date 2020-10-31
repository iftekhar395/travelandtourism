import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackinfoComponent } from './feedbackinfo.component';

describe('FeedbackinfoComponent', () => {
  let component: FeedbackinfoComponent;
  let fixture: ComponentFixture<FeedbackinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
