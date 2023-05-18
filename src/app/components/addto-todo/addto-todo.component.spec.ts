import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtoTodoComponent } from './addto-todo.component';

describe('AddtoTodoComponent', () => {
  let component: AddtoTodoComponent;
  let fixture: ComponentFixture<AddtoTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddtoTodoComponent]
    });
    fixture = TestBed.createComponent(AddtoTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
