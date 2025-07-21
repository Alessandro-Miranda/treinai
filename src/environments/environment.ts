// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { FirebaseOptions } from "@angular/fire/app";

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env['API_KEY'],
  authDomain: import.meta.env['AUTH_DOMAIN'],
  projectId: import.meta.env['PROJECT_ID'],
  storageBucket: import.meta.env['STORAGE_BUCKET'],
  messagingSenderId: import.meta.env['MESSAGING_SENDER_ID'],
  appId: import.meta.env['APP_ID'],
};

export const environment = {
  production: false,
  firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
