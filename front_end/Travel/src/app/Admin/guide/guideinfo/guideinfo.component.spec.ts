import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideinfoComponent } from './guideinfo.component';

describe('GuideinfoComponent', () => {
  let component: GuideinfoComponent;
  let fixture: ComponentFixture<GuideinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
