import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[libFormMutable]'
})
export class FormMutableDirective implements OnInit {

  @Input() edgeNumber: number;
  @Input() color;
  constructor(private el: ElementRef) {

    this.updateState(this.color || 'red', this.edgeNumber || 4);

  }
  updateState(color, edgeNumber) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.class = "bb-mutable-" + edgeNumber;
  }
  ngOnInit(): void {

  }

}
