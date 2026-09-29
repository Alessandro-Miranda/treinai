import { IUser } from '@/services/user/IUser';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { FirebaseFirestore } from '@capacitor-firebase/firestore';

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

    const { snapshot } = await FirebaseFirestore.getDocument({
      reference: `users/${user?.uid}`
    });

    return snapshot.data as IUser | undefined;
  } catch (err) {
    return undefined;
  }
}
