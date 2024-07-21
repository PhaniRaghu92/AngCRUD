import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[CTA]',
})
export class CtaDirective implements OnInit {
  @Input() displayText: string = '';
  constructor(private elementRef: ElementRef) {
    console.log('This Message is from Directive CTA');
  }

  ngOnInit(): void {
    const ele: any = this.elementRef.nativeElement;
    console.log('DIRECTIVE  ONINIT');
    console.log(this.elementRef.nativeElement.tagName);
    if (ele.tagName === 'DIV') {
      ele.innerHTML = `<h3><Some class="text-danger">Some sample text added to DIV --> ${this.displayText}</h3>`;
    }
  }
}
