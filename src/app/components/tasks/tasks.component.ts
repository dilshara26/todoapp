import { Component,OnInit,Input } from '@angular/core';

import { TasksService } from 'src/app/services/tasks.service';

import { Task } from '../Task';
import { filter } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = []

  constructor(private tasksService:TasksService){
    
  }

  ngOnInit() {
    this.tasksService.getTasks().subscribe(tasks => this.tasks= tasks)
  }

  DeleteTask(task:Task) {
    this.tasksService.deleteTask(task).subscribe(()=> this.tasks = this.tasks.filter(t => t.id !=task.id))
  }
  onReminder(task:Task) {

    task.reminder = !task.reminder
    this.tasksService.updateReminder(task).subscribe()
  }

}
