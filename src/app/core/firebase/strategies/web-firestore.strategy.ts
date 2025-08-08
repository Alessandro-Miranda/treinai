import { inject, Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  doc,
  docSnapshots,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';
import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  setDoc,
} from 'firebase/firestore';
import { Observable } from 'rxjs';
import { FirebaseContext } from '../decorators/firebase-context';
import { RunInFirebaseContext } from '../decorators/run-in-context';
import {
  CreateParams,
  FirestoreStrategyInterface,
  QueryPath,
  ReadParams,
} from '../interfaces/firestore.interface';

@RunInFirebaseContext
@Injectable({ providedIn: 'root' })
export class WebFirestoreStrategy
  extends FirebaseContext
  implements FirestoreStrategyInterface
{
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

  private getRef({ path }: QueryPath): DocumentReference<DocumentData> {
    return doc(this.firestore, path);
  }

  private getCollection({ path }: QueryPath): CollectionReference {
    return collection(this.firestore, path);
  }

  private prepareWhereQuery({
    collection,
    where: filter,
  }: Pick<ReadParams<any>, 'where'> & { collection: CollectionReference }) {
    return query(
      collection,
      where(filter.fieldPath, filter.operation, filter.value)
    );
  }
}
