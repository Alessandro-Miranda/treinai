import '@/core/firebase/firebase.config';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { primeUiLicense } from './config/primeui-license.local';
import { TreinaiPreset } from './theme/treinai-preset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      ripple: true,
      license: primeUiLicense,
      theme: {
        preset: TreinaiPreset,
        options: {
          darkModeSelector: 'none',
        },
      },
    }),
  ],
};
