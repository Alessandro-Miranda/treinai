import { inject, Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Observable } from 'rxjs';
import {
  CreateParams,
  FirestoreStrategyInterface,
  QueryPath,
  ReadParams,
} from './interfaces/firestore.interface';
import { NativeFirestoreStrategy } from './strategies/native-firestore.strategy';
import { WebFirestoreStrategy } from './strategies/web-firestore.strategy';

@Injectable({ providedIn: 'root' })
export class FirestoreService implements FirestoreStrategyInterface {
  private webFirestore = inject(WebFirestoreStrategy);
  private nativeFirestore = inject(NativeFirestoreStrategy);
  private firestore: FirestoreStrategyInterface;

  constructor() {
    this.firestore = Capacitor.isNativePlatform()
      ? this.nativeFirestore
      : this.webFirestore;
  }

  create<T>(params: CreateParams<T>): Promise<void> {
    return this.firestore.create(params);
  }

  findDoc<T>(params: QueryPath): Promise<T> {
    return this.firestore.findDoc<T>(params);
  }

  findMany<T>(params: ReadParams<T>): Observable<T[]> {
    return this.firestore.findMany(params);
  }
}
