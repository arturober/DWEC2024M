import {
  afterNextRender,
  Directive,
  ElementRef,
  inject,
  output,
} from '@angular/core';
import { LoadGoogleApiService } from './load-google-api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: 'google-login',
})
export class GoogleLoginDirective {
  #element = inject(ElementRef);
  #loadService = inject(LoadGoogleApiService);
  login = output<google.accounts.id.CredentialResponse>();

  constructor() {
    // Nos aseguramos que no se ejecuta en el lado del servidor si tenemos SSR activado
    afterNextRender(() =>
      this.#loadService.setGoogleBtn(this.#element.nativeElement)
    );
    this.#loadService.credential$
      .pipe(takeUntilDestroyed())
      .subscribe((resp) => this.login.emit(resp));
  }
}
