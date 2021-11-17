import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarpersonajesComponent } from './insertarpersonajes.component';

describe('InsertarpersonajesComponent', () => {
  let component: InsertarpersonajesComponent;
  let fixture: ComponentFixture<InsertarpersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarpersonajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarpersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
