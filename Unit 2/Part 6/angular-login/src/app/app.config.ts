import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideGoogleId } from './google-login/google-login.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideGoogleId('746820501392-oalflicqch2kuc12s8rclb5rf7b1fist.apps.googleusercontent.com'),
  ],
};
