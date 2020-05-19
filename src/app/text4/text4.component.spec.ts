import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text4Component } from './text4.component';

describe('Text4Component', () => {
  let component: Text4Component;
  let fixture: ComponentFixture<Text4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
