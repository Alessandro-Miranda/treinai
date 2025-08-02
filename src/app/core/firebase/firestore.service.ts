import { inject, Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  doc,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  Firestore,
  getDoc,
  query,
  setDoc,
  where,
  WhereFilterOp,
  WithFieldValue,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseContext } from './firebase-context.helper';

type QueryPath = {
  path: string;
};

type CreateParams<T> = QueryPath & {
  data: WithFieldValue<{ [Property in keyof T]: T[Property] }>;
};

type ReadParams<T> = QueryPath & {
  where: {
    fieldPath: Extract<keyof T, string>;
    operation: WhereFilterOp;
    value: T[keyof T];
  };
};

@Injectable({ providedIn: 'root' })
export class FirestoreService {
  private firestore = inject(Firestore);
  private firebaseContext = inject(FirebaseContext);

  async create<T>({ data, path }: CreateParams<T>): Promise<void> {
    return this.firebaseContext.runInContext<void>(() =>
      setDoc(this.getRef({ path }), data)
    );
  }

  async findDoc({ path }: QueryPath): Promise<DocumentSnapshot> {
    return this.firebaseContext.runInContext<DocumentSnapshot>(() =>
      getDoc(this.getRef({ path }))
    );
  }

  findMany<T>({ path, where: filter }: ReadParams<T>): Observable<T[]> {
    const collection = this.getCollection({ path });
    const q = query(
      collection,
      where(filter.fieldPath, filter.operation, filter.value)
    );
    
    return collectionData(q) as Observable<T[]>;
  }

  getRef({ path }: QueryPath): DocumentReference<DocumentData> {
    const docRef = this.firebaseContext.runInContext<
      DocumentReference<DocumentData>
    >(() => doc(this.firestore, path)) as DocumentReference<DocumentData>;

    return docRef;
  }

  getCollection({ path }: QueryPath): CollectionReference {
    return this.firebaseContext.runInContext<CollectionReference<DocumentData>>(() =>
      collection(this.firestore, path)
    ) as CollectionReference<DocumentData>;
  }
}
