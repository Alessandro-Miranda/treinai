import { Capacitor } from '@capacitor/core';
import { getApp } from 'firebase/app';
import {
  getAuth,
  indexedDBLocalPersistence,
  initializeAuth,
} from 'firebase/auth';

export const firebaseAuth = Capacitor.isNativePlatform()
  ? initializeAuth(getApp(), { persistence: indexedDBLocalPersistence })
  : getAuth();
