import { Injectable } from '@angular/core';

// import {Subscription} from 'rxjs/Subscription';
 import {Observable, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask!: boolean;
  private subject = new Subject<any>();

  constructor() { }

  toggleAdd(){
    this.showAddTask = !this.showAddTask
    this.subject.next(this.showAddTask)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable()
  }
}
