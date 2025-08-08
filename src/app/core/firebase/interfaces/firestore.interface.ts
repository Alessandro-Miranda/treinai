import {
  WhereFilterOp,
  WithFieldValue
} from 'firebase/firestore';
import { Observable } from 'rxjs';

export type QueryPath = {
  path: string;
};

export type CreateParams<T> = QueryPath & {
  data: WithFieldValue<{ [Property in keyof T]: T[Property] }>;
};

export type ReadParams<T> = QueryPath & {
  where: {
    fieldPath: Extract<keyof T, string>;
    operation: WhereFilterOp;
    value: T[keyof T];
  };
};

export interface FirestoreStrategyInterface {
  create: <T>(params: CreateParams<T>) => Promise<void>;
  findDoc: <T>(params: QueryPath) => Promise<T>;
  findMany: <T>(params: ReadParams<T>) => Observable<T[]>;
}
