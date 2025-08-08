import { Injectable } from '@angular/core';
import { FirebaseFirestore } from '@capacitor-firebase/firestore';
import { from, Observable } from "rxjs";
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
    const collection = FirebaseFirestore.getCollection({
      reference: path,
      compositeFilter: {
        type: 'and',
        queryConstraints: [
          {
            type: 'where',
            fieldPath: where.fieldPath,
            opStr: where.operation,
            value: where.value
          }
        ]
      }
    }).then(({ snapshots }) => snapshots);

    return from(collection) as Observable<T[]>;
  }
}