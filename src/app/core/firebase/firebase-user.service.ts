import { inject, Injectable } from "@angular/core";
import { doc, Firestore, getDoc, setDoc } from "@angular/fire/firestore";
import { UserData } from "../interfaces/user.inteface";

@Injectable({ providedIn: 'root' })
export class FirebaseUserService {
  private firestore = inject(Firestore);
  
  async createUser(user: UserData): Promise<void> {
    const userRef = doc(this.firestore, 'users', user.uid);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) return;

    return await setDoc(userRef, user);
  }
}