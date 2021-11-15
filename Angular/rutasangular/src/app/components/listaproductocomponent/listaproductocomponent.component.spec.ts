import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaproductocomponentComponent } from './listaproductocomponent.component';

describe('ListaproductocomponentComponent', () => {
  let component: ListaproductocomponentComponent;
  let fixture: ComponentFixture<ListaproductocomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaproductocomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaproductocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
