import { UserData } from "./user-data.interace";

export interface AuthStrategyInterface {
  signInWithGoogle: () => Promise<UserData>;
  getCurrentUser: () => Promise<UserData>;
  logout: () => Promise<void>
}