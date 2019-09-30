import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';

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

  onDrop(event: CdkDragDrop<string[]>): void {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
  }
  
  canDrop(drag: CdkDrag<string>, drop: CdkDropList<string[]>) {
    console.log(drop);
    return drag.data !== 'FLX-333' || drop.id !== 'doneList';
  }
}
