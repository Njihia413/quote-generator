import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective {

  constructor(private selectedElement: ElementRef) {
    this.selectedElement.nativeElement.style.color = 'rgb(235, 174, 8)';
  }


}
