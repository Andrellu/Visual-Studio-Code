import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallespeliculasComponent } from './detallespeliculas.component';

describe('DetallespeliculasComponent', () => {
  let component: DetallespeliculasComponent;
  let fixture: ComponentFixture<DetallespeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallespeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallespeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
