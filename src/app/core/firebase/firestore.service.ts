import { inject, Injectable } from '@angular/core';
import {
  doc,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  Firestore,
  getDoc,
  setDoc,
  WithFieldValue,
} from '@angular/fire/firestore';
import { FirebaseContext } from './firebase-context.helper';

@Injectable({ providedIn: 'root' })
export class FirestoreService {
  private firestore = inject(Firestore);
  private firebaseContext = inject(FirebaseContext);

  async create<T>(
    path: string,
    data: WithFieldValue<{ [Property in keyof T]: T[Property] }>
  ): Promise<void> {
    return this.firebaseContext.runInContext<void>(() =>
      setDoc(this.getRef(path), data)
    );
  }

  async read(path: string): Promise<DocumentSnapshot> {
    return this.firebaseContext.runInContext<DocumentSnapshot>(() =>
      getDoc(this.getRef(path))
    );
  }

  getRef(path: string): DocumentReference<DocumentData> {
    const docRef = this.firebaseContext.runInContext<
      DocumentReference<DocumentData>
    >(() => doc(this.firestore, path)) as DocumentReference<DocumentData>;

    return docRef;
  }
}
