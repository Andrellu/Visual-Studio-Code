import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablapersonajesComponent } from './tablapersonajes.component';

describe('TablapersonajesComponent', () => {
  let component: TablapersonajesComponent;
  let fixture: ComponentFixture<TablapersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablapersonajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablapersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
