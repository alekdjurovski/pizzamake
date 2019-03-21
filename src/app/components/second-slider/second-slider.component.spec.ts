import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSliderComponent } from './second-slider.component';

describe('SecondSliderComponent', () => {
  let component: SecondSliderComponent;
  let fixture: ComponentFixture<SecondSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
