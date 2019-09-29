import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventnewComponent } from './eventnew.component';

describe('EventnewComponent', () => {
  let component: EventnewComponent;
  let fixture: ComponentFixture<EventnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
