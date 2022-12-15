import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderTodoComponent } from './render-todo.component';

describe('RenderTodoComponent', () => {
  let component: RenderTodoComponent;
  let fixture: ComponentFixture<RenderTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
