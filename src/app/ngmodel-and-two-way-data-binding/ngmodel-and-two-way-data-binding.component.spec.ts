import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodelAndTwoWayDataBindingComponent } from './ngmodel-and-two-way-data-binding.component';

describe('NgmodelAndTwoWayDataBindingComponent', () => {
  let component: NgmodelAndTwoWayDataBindingComponent;
  let fixture: ComponentFixture<NgmodelAndTwoWayDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgmodelAndTwoWayDataBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgmodelAndTwoWayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
