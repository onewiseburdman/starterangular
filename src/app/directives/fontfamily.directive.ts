import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[fontFam]'
})
export class FontFamilyDirective implements OnInit {
  @Input() fontFam: any;
  element;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    const body = this.element.closest('body') as HTMLElement;
    if (this.fontFam) {
      body.style.fontFamily = this.fontFam.templates[0].fonts[0].fontfamily;
    }
  }

}
