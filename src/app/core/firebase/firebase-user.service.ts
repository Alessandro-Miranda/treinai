import { inject, Injectable } from "@angular/core";
import { User } from "@angular/fire/auth";
import { doc, Firestore, getDoc, serverTimestamp, setDoc } from "@angular/fire/firestore";
import { UserData } from "../interfaces/user.inteface";

@Injectable({ providedIn: 'root' })
export class FirebaseUserService {
  private firestore = inject(Firestore);
  
  async createUser(user: User): Promise<void> {
    const userRef = doc(this.firestore, 'users', user.uid);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) return;

    const userData: UserData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      createdAt: serverTimestamp(),
    };

    return await setDoc(userRef, userData);
  }
}