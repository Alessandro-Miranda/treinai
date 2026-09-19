import { CanMatchFn } from '@angular/router';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';

export const authenticatedGuard: CanMatchFn = async (_route, _segments) => {
  const { user } = await FirebaseAuthentication.getCurrentUser();
  
  return !!user;
};
