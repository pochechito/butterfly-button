import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[libFormMutable]'
})
export class FormMutableDirective implements OnInit {

  @Input() color;
  constructor(private el: ElementRef,private renderer: Renderer2) {


  }
  updateState(color) {
    this.el.nativeElement.style.backgroundColor = color;
    this.renderer.addClass(this.el.nativeElement, "bb-mutable");
    this.renderer.addClass(this.el.nativeElement, "bb-button");

  }
  ngOnInit(): void {
    this.updateState(this.color || 'red');

  }

}
