import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  toDoTasks = ['FLX-111', 'FLX-222', 'FLX-333'];
  inProgressTasks = ['FLX-4444', 'FLX-5555'];
  doneTasks = ['FLX-66666'];

  constructor() { }

  refreshToDo() {
    this.toDoTasks = ['FLX-111', 'FLX-222', 'FLX-333'];
  }
  
}
