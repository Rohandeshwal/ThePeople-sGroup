import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurGoalsComponent } from './our-goals.component';

describe('OurGoalsComponent', () => {
  let component: OurGoalsComponent;
  let fixture: ComponentFixture<OurGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurGoalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
