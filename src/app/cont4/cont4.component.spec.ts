import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cont4Component } from './cont4.component';

describe('Cont4Component', () => {
  let component: Cont4Component;
  let fixture: ComponentFixture<Cont4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cont4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cont4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
