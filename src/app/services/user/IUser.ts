import { FieldValue, Timestamp } from "@capacitor-firebase/firestore";

export interface IUser {
  uid: string;
  username: string;
  email: string;
  createdAt: Timestamp;
  isProfileComplete: boolean;
  role: 'coach' | 'athlete';
}

type UserBase = Omit<IUser, 'createdAt' | 'uid'>;

export type CreateUser = UserBase & {
  password: string;
}

export type CreateOrUpdateUserProfile = UserBase & {
  createdAt?: FieldValue;
};