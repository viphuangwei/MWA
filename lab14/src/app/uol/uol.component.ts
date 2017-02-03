import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uol',
  templateUrl: './uol.component.html',
  styleUrls: ['./uol.component.css'],
  inputs: ['arrayOfStrings']
})
export class UolComponent implements OnInit {
  _arrayOfStrings:string[];

  set arrayOfStrings(arrayString:string[]) {
  	this._arrayOfStrings = arrayString;
  }

  constructor() { }

  ngOnInit() {
  }

}
