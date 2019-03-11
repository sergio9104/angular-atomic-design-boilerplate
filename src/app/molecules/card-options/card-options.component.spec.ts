import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOptionsComponent } from './card-options.component';

describe('CardOptionsComponent', () => {
  let component: CardOptionsComponent;
  let fixture: ComponentFixture<CardOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
