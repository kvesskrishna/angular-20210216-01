import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.setBg('yellow');
  }
  setBg(color: string) {
    console.log('directive constructor called');
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', color);
  }
  @HostListener('mouseenter') mouseenter() {
    this.setBg('green');
  }
  @HostListener('mouseleave') mouseleave() {
    this.setBg('red');
  }
}
