import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichasComponent } from './fichas.component';

describe('FichasComponent', () => {
  let component: FichasComponent;
  let fixture: ComponentFixture<FichasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
