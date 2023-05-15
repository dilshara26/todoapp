import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input()
  color!: string;
  @Input()
  name!: string;
  @Output() btnClick = new EventEmitter()

  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onClick(){
    this.btnClick.emit()
  }


}
