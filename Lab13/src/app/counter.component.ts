import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  outputs:['counterChange'],
 inputs:['counter'],
  template: `
    <button (click)="decrease()">-</button>
    {{counterValue}}
    <button (click)="increase()">+</button>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  counterValue:number;
  _counter:number;

  counterChange: EventEmitter<number>;
  constructor() { 
    this.counterChange = new EventEmitter();
    this.counterValue = this.counter;
  }

  set counter(counter:number){
    this._counter=counter;
    this.counterValue = counter;
  }
 
  ngOnInit() {
  }
  increase(){
    this.counterValue ++;
    this.counterChange.emit(this.counterValue);
    return false;
  }
  decrease(){
    this.counterValue --;
    this.counterChange.emit(this.counterValue);
    return false;
  }

  changeCounterValue(){

    this.counterChange.emit(this.counterValue);
  }
}
