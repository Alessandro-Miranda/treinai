import { inject, Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  doc,
  docSnapshots,
  DocumentData,
  DocumentReference,
  Firestore,
  query,
  setDoc,
  where,
  WhereFilterOp,
  WithFieldValue
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseContext } from './decorators/firebase-context';
import { RunInFirebaseContext } from './decorators/run-in-context';

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

@RunInFirebaseContext
@Injectable({ providedIn: 'root' })
export class FirestoreService extends FirebaseContext {
  private firestore = inject(Firestore);

  async create<T>({ data, path }: CreateParams<T>): Promise<void> {
    return setDoc(this.getRef({ path }), data);
  }

  findDoc<T>({ path }: QueryPath): Observable<T> {
    return docSnapshots(this.getRef({ path })) as Observable<T>;
  }

  findMany<T>({ path, where: filter }: ReadParams<T>): Observable<T[]> {
    const collection = this.getCollection({ path });
    const q = this.prepareWhereQuery({ collection, where: filter });

    return collectionData(q) as Observable<T[]>;
  }

  getRef({ path }: QueryPath): DocumentReference<DocumentData> {
    return doc(this.firestore, path);
  }

  getCollection({ path }: QueryPath): CollectionReference {
    return collection(this.firestore, path);
  }
  
  prepareWhereQuery({
    collection,
    where: filter,
  }: Pick<ReadParams<any>, 'where'> & { collection: CollectionReference }) {
    return query(
      collection,
      where(filter.fieldPath, filter.operation, filter.value)
    );
  }
}