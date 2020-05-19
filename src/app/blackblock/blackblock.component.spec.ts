import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackblockComponent } from './blackblock.component';

describe('BlackblockComponent', () => {
  let component: BlackblockComponent;
  let fixture: ComponentFixture<BlackblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
