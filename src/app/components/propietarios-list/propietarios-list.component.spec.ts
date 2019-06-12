import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietariosListComponent } from './propietarios-list.component';

describe('PropietariosListComponent', () => {
  let component: PropietariosListComponent;
  let fixture: ComponentFixture<PropietariosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropietariosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropietariosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
