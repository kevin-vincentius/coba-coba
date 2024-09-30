import { Component, EventEmitter, Output } from '@angular/core';
import { ITodo } from '../../interfaces/i-todo';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from '../../../../cores/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  // @Output() onSearch: EventEmitter<string> = new EventEmitter();
  
  // @Output() emit: EventEmitter<ITodo> = new EventEmitter();
  
  icons = {
    add: faPlusCircle
  }
  constructor(private todoService: TodoService) { }
  
  todo: ITodo = { 
    id: 0, 
    task: '',
    isDone: false
  }

  add(){
  //  this.emit.emit(this.todo); 
  this.todoService.addTodo(this.todo);
  }
  
  search(){
    // this.onSearch.emit(this.todo.task);
    this.todoService.searchTodo(this.todo.task);
  }
}
