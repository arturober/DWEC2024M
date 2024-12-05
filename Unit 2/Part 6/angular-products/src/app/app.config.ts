import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from '@angular/router';

import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import {
  provideClientHydration,
  withIncrementalHydration
} from '@angular/platform-browser';
import { routes } from './app.routes';
import { baseUrlInterceptor } from './shared/interceptors/base-url.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withPreloading(PreloadAllModules)
    ),
    provideHttpClient(withInterceptors([baseUrlInterceptor]), withFetch()),
    provideClientHydration(withIncrementalHydration()),
  ],
};
//provideZoneChangeDetection({ eventCoalescing: true })
