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

@Injectable({ providedIn: 'root' })
export class FirestoreService {
  private firestore = inject(Firestore);

  async create<T>(
    path: string,
    data: WithFieldValue<{ [Property in keyof T]: T[Property] }>
  ): Promise<void> {
    return setDoc(this.getRef(path), data);
  }

  async read(path: string): Promise<DocumentSnapshot> {
    return getDoc(this.getRef(path));
  }

  getRef(path: string): DocumentReference<DocumentData> {
    return doc(this.firestore, path);
  }
}
