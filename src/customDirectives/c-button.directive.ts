import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appCButton]',
})
export class CButtonDirective implements OnInit {
  @Input('type') type?: string = 'primary';
  @Input('btnValue') value?: string = 'sample button';

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.innerHTML = `    
    <input 
    class="btn btn-${this.type}"
    value='${this.value}'>
    `;
  }

  // @HostListener('mouseover', ['$event'])
  // public onMouserover(): void {
  //   this.elementRef.nativeElement.style.background = 'red';
  // }

  // @HostListener('mouseout', ['$event'])
  // public onMouserout(): void {
  //   this.elementRef.nativeElement.style.background = 'blue';
  // }

  @HostListener('click', ['$event'])
  public pjhasfdassvdasgfdasfgazsaanni(event: any): void {
    console.log(event);
    alert('you clicked on the button ' + event.target.value);
  }
}
