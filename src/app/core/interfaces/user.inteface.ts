import { FieldValue } from "@angular/fire/firestore";

export interface UserData {
  uid: string,
  email: string | null;
  displayName: string | null;
  createdAt: FieldValue
}