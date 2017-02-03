import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appUpper]',
  inputs: ['word']
})
export class UpperDirective implements AfterViewInit {
  _word:string;

  constructor(private element: ElementRef) { 
	/*setTimeout(function(){
  		this.element.nativeElement.innerHTML = this.element.nativeElement.innerHTML.toUpperCase();
  	}.bind(this));*/
  }

  ngAfterViewInit():void {
	this.element.nativeElement.innerHTML = this.element.nativeElement.innerHTML.toUpperCase();
  }

}
