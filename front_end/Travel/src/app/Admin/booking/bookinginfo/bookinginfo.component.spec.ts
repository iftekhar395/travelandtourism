import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinginfoComponent } from './bookinginfo.component';

describe('BookinginfoComponent', () => {
  let component: BookinginfoComponent;
  let fixture: ComponentFixture<BookinginfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookinginfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookinginfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
