import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaCatastralComponent } from './ficha-catastral.component';

describe('FichaCatastralComponent', () => {
  let component: FichaCatastralComponent;
  let fixture: ComponentFixture<FichaCatastralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaCatastralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaCatastralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
