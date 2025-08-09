import { Injectable } from '@angular/core';
import { FirebaseFirestore } from '@capacitor-firebase/firestore';
import { Observable } from "rxjs";
import { CreateParams, FirestoreStrategyInterface, QueryPath, ReadParams } from "../interfaces/firestore.interface";

@Injectable({ providedIn: 'root' })
export class NativeFirestoreStrategy implements FirestoreStrategyInterface {
  async create<T>({ data, path }: CreateParams<T>): Promise<void> {
    return await FirebaseFirestore.setDocument({
      reference: path,
      data
    });
  }

  async findDoc<T>({ path }: QueryPath): Promise<T> {
    const { snapshot } = await FirebaseFirestore.getDocument({
      reference: path
    })

    return snapshot.data as T;
  }

  findMany<T>({ path, where }: ReadParams<T>): Observable<T[]> {
    return new Observable<T[]>((subscriber) => {
      const callbackId = FirebaseFirestore.addCollectionSnapshotListener({
        reference: path,
        compositeFilter: {
          type: 'and',
          queryConstraints: [
            {
              type: 'where',
              fieldPath: where.fieldPath,
              opStr: where.operation,
              value: where.value,
            },
          ],
        },
      }, (event, error) => {
        if (error) return subscriber.error(error);

        const data = event?.snapshots.map(doc => doc.data) as T[];

        return subscriber.next(data);
      }).then(id => id);

      return async () => FirebaseFirestore.removeSnapshotListener({ callbackId: await callbackId })
    })
  }
}