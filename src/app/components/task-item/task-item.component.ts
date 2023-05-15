import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent  {

  @Input()
  task!: Task; 
  faTimes = faTimes

  @Output() OnDeleteTask : EventEmitter<Task> = new EventEmitter();
  @Output() OnReminderToggle : EventEmitter<Task> = new EventEmitter();

  onDelete(task:Task){  
    this.OnDeleteTask.emit(task)
  }

  onDoubleClick(task:Task){

    this.OnReminderToggle.emit(task)
  }
}
