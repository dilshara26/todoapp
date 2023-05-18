import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Subscription} from 'rxjs';
import { UiService } from 'src/app/services/ui.service';


import { Task } from '../Task';

@Component({
  selector: 'app-addto-todo',
  templateUrl: './addto-todo.component.html',
  styleUrls: ['./addto-todo.component.css']
})
export class AddtoTodoComponent implements OnInit {
  btnClicked: boolean = false
  subscription = new Subscription()

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private uiService: UiService){
    this.subscription = uiService.onToggle().subscribe((value) => this.btnClicked= value)
  }
  
  day!: string;
  text!: string;
  reminder:boolean  = false;

  @Output() onFormSubmit: EventEmitter<Task> = new EventEmitter()

  onSubmit(){

    const newTask={
      day : this.day,
      text: this.text,
      reminder: this.reminder
    }

    this.onFormSubmit.emit(newTask);

    this.day=""
    this.text =""
    this.reminder = false



  }


}
