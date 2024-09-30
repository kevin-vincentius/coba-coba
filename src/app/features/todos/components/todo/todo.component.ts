import { Component, Input } from '@angular/core';
import { ITodo } from '../../interfaces/i-todo';
import { TodoService } from '../../../../cores/services/todo.service';

let MOCK_DATA = [
  {
    id: 1,
    task: 'liat karin',
    isDone: false,
  },
  {
    id: 2,
    task: 'mikirin karin',
    isDone: false,
  },
  {
    id: 3,
    task: 'chat karin',
    isDone: false,
  },
];

@Component({
  selector: 'app-todo',
  template: `
    <div class="card shadow">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <app-todo-form *ngIf="!forTrash"></app-todo-form>
      </div>
      <app-todo-list [forTrash]="forTrash" [todos]="todos"></app-todo-list>
      <div class="card-footer">
        <app-todo-total [forTrash]="forTrash"></app-todo-total>
      </div>
    </div>
  `,
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todos: ITodo[] = MOCK_DATA;
  isEditing: boolean = false;
  @Input() forTrash: boolean = false;
  @Input() title: string = '';

  constructor(private todoService: TodoService) {}

  getAll() {
    return this.todoService.getTodos();
  }

  add(todo: ITodo) {
    let payload: ITodo = { ...todo };
    payload.id = this.todos.length + 1;
    this.todos.push(payload);
  }

  remove(todos: ITodo[]) {
    this.todos = todos;
  }

  search(query: string) {
    // let todosCopy: ITodo[] = [...this.todos];
    let results = MOCK_DATA.filter((todo: ITodo) =>
      todo.task.toLowerCase().includes(query.toLowerCase())
    );
    if (results.length > 0) {
      this.todos = results;
    }
    console.log(results.length);

    if (query === '') {
      this.todos = MOCK_DATA;
    }
    if (results.length === 0) {
      this.todos = [];
    }
  }
}
