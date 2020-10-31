import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentinfoComponent } from './agentinfo.component';

describe('AgentinfoComponent', () => {
  let component: AgentinfoComponent;
  let fixture: ComponentFixture<AgentinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
