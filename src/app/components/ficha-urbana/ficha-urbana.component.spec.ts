import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaUrbanaComponent } from './ficha-urbana.component';

describe('FichaUrbanaComponent', () => {
  let component: FichaUrbanaComponent;
  let fixture: ComponentFixture<FichaUrbanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaUrbanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaUrbanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
