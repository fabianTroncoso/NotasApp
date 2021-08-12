import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasTablaComponent } from './notas-tabla.component';

describe('NotasTablaComponent', () => {
  let component: NotasTablaComponent;
  let fixture: ComponentFixture<NotasTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
