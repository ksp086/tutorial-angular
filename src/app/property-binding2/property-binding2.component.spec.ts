import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBinding2Component } from './property-binding2.component';

describe('PropertyBinding2Component', () => {
  let component: PropertyBinding2Component;
  let fixture: ComponentFixture<PropertyBinding2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBinding2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBinding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
