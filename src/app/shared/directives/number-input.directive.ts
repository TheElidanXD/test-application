import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberInputDirective]'
})
export class NumberInputDirective {
  private regex: RegExp = new RegExp(/^-?[0-9]+$/g);
  private specialKeys: Array<number> = [37, 39, 8, 9, 46, 17];

  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  private onKeyDown(event: KeyboardEvent): void {
    if (this.specialKeys.indexOf(event.keyCode) !== -1) {
      return;
    }
    if (!RegExp(/[0-9]/).test(event.key)) {
      event.preventDefault();
    }
  }
  @HostListener('paste', ['$event'])
  private onPaste(event: ClipboardEvent): void {
    if (!this.regex.test(event.clipboardData.getData('text/plain'))) {
      event.preventDefault();
    }
  }
  @HostListener('drop', ['$event'])
  private onDrop(event: DragEvent): void {
    if (!this.regex.test(event.dataTransfer.getData('text/plain'))) {
      event.preventDefault();
    }
  }
}
