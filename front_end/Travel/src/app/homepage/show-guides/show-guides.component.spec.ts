import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGuidesComponent } from './show-guides.component';

describe('ShowGuidesComponent', () => {
  let component: ShowGuidesComponent;
  let fixture: ComponentFixture<ShowGuidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowGuidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
