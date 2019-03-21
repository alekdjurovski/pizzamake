import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSliderComponent } from './first-slider.component';

describe('FirstSliderComponent', () => {
  let component: FirstSliderComponent;
  let fixture: ComponentFixture<FirstSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
