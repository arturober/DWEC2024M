import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoogleLoginDirective } from './google-login/google-login.directive';
import { LoadGoogleApiService } from './google-login/load-google-api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [GoogleLoginDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-login';

  #loadGoogle = inject(LoadGoogleApiService);

  constructor() {
    this.#loadGoogle.credential$.
      pipe(takeUntilDestroyed())
      .subscribe(
        resp => console.log(resp.credential) // Envia esto tu API
      );
  }
}
