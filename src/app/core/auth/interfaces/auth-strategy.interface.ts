import { UserData } from "./user-data.interace";

export interface AuthStrategyInterface {
  signInWithGoogle: () => Promise<UserData>;
  getCurrentUser: () => Promise<UserData | null>;
  logout: () => Promise<void>
}