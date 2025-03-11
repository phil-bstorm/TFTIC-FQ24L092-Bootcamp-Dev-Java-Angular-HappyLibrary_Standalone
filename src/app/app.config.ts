import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {jwtInterceptor} from './features/auth/interceptors/jwt.interceptor';
import {errorInterceptor} from './features/auth/interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideHttpClient(withInterceptors([jwtInterceptor, errorInterceptor]))
  ]
};
