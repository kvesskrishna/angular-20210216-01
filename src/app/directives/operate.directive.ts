import {
  Directive,
  Renderer2,
  ElementRef,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appOperate]',
})
export class OperateDirective implements OnInit {
  device: string;
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.device = this.elementRef.nativeElement.innerText;
  }
  operate(color, text) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      color
    );
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'innerText',
      `${this.device} ${text}`
    );
  }

  @HostListener('mouseenter') mouseenter() {
    this.operate('green', 'Running...');
  }
  @HostListener('mouseleave') mouseleave() {
    this.operate('red', 'Stopped');
  }
}
