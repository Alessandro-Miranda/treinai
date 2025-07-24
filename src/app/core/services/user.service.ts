import { EnvironmentInjector, inject, Injectable, runInInjectionContext } from "@angular/core";
import { Auth, User } from "@angular/fire/auth";
import { doc, DocumentData, DocumentReference, Firestore, getDoc, serverTimestamp, setDoc } from "@angular/fire/firestore";

@Injectable({ providedIn: 'root' })
export class UserService {
  private firestore = inject(Firestore);
  private injector = inject(EnvironmentInjector);
  private auth = inject(Auth);

  async createIfNotExists(user: User): Promise<void> {
    let snapshotExists = false;
    let docRef: DocumentReference<DocumentData, DocumentData>;

    await runInInjectionContext(this.injector, async () => {
      docRef = doc(this.firestore, 'users', user.uid);
      snapshotExists = (await getDoc(docRef)).exists();
    });

    if (snapshotExists) return;

    await runInInjectionContext(this.injector, async () => {
      await setDoc(docRef, {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        createdAt: serverTimestamp(),
      });
    });
  }
}