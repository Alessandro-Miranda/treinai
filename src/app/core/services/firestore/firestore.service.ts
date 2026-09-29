import { Service } from '@angular/core';
import { FirebaseFirestore } from '@capacitor-firebase/firestore';
import {
  DocumentData,
  PartialWithFieldValue,
  WithFieldValue
} from 'firebase/firestore';

@Service()
export class FirestoreService {
  create<T>(
    path: string,
    data: WithFieldValue<{ [Property in keyof T]: T[Property] }>,
  ): Promise<void> {
    return FirebaseFirestore.setDocument({
      reference: path,
      data
    })
  }

  update<T extends DocumentData>(
    path: string,
    data: PartialWithFieldValue<T>,
  ): Promise<void> {

    return FirebaseFirestore.setDocument({
      reference: path,
      data,
      merge: true,
    });
  }
}
