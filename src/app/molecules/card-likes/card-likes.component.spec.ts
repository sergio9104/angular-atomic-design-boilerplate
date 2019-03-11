import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLikesComponent } from './card-likes.component';

describe('CardLikesComponent', () => {
  let component: CardLikesComponent;
  let fixture: ComponentFixture<CardLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
