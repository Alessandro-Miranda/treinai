import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { IUser } from './models/user';

export const profileCompleteGuard: CanActivateFn = async (route, _state) => {
  const router = inject(Router);
  
  const user = await userData();

  if (user && user.isProfileComplete) return true;
  
  return router.createUrlTree(['/sign-up'], {
    queryParams: route.queryParams,
  });
};

const userData = async () => {
  try {
    const { user } = await FirebaseAuthentication.getCurrentUser();
    
    if (!user) return undefined;
    
    const firestore = getFirestore();
    const userDocPath = `users/${user?.uid}`;
    const userRef = doc(firestore, userDocPath);
  
    const userDocument = await getDoc(userRef);

    return userDocument.data() as IUser | undefined;
  } catch (err) {
    return undefined;
  }
}
