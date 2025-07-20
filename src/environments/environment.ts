// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { FirebaseOptions } from "@angular/fire/app";

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyAFSJYzzsECebh7-oBlUrFoLa90Eoqhpwg',
  authDomain: 'treinai-e5e78.firebaseapp.com',
  projectId: 'treinai-e5e78',
  storageBucket: 'treinai-e5e78.firebasestorage.app',
  messagingSenderId: '907724283487',
  appId: '1:907724283487:web:6082687c662aa64d9845ea',
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
