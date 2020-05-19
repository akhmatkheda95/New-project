import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { End2Component } from './end2.component';

describe('End2Component', () => {
  let component: End2Component;
  let fixture: ComponentFixture<End2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ End2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(End2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
