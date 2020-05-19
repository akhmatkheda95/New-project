import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blackblock2Component } from './blackblock2.component';

describe('Blackblock2Component', () => {
  let component: Blackblock2Component;
  let fixture: ComponentFixture<Blackblock2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blackblock2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blackblock2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
