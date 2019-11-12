import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichasRuralComponent } from './ficha-rural.component';

describe('FichasRuralComponent', () => {
  let component: FichasRuralComponent;
  let fixture: ComponentFixture<FichasRuralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichasRuralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichasRuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
