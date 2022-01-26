import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCarouselsComponent } from './events-carousels.component';

describe('EventsCarouselsComponent', () => {
  let component: EventsCarouselsComponent;
  let fixture: ComponentFixture<EventsCarouselsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsCarouselsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsCarouselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
