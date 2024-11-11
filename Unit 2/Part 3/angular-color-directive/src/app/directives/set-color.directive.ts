import {
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';

@Directive({
  selector: '[setColor]',
  standalone: true,
  host: {
    '[style.backgroundColor]': 'color()',
    '[style.color]': 'textColor()',
    '(click)': 'toggleTextColor()'
  }
})
export class SetColorDirective {
  color = input.required<string>({ alias: 'setColor' });
  textColor = signal('black');

  toggleTextColor() {
    this.textColor.update(c => c === 'black' ? 'white' : 'black');
  }
}
