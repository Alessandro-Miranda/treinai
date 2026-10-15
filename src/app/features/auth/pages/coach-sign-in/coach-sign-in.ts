
import { auth } from '@/core/firebase/firebase.config';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { SignInForm } from '../../components/sign-in-form/sign-in-form';
import { ISignInFormData } from '../../models/IAuthForm';

@Component({
  imports: [SignInForm],
  selector: 'app-coach-sign-in',
  styleUrl: './coach-sign-in.scss',
  templateUrl: './coach-sign-in.html',
})
export class CoachSignIn {
  private readonly _router = inject(Router);

  onSignIn(data: ISignInFormData) {
    console.log('logando: ', data);
  }

  onNavigateToSignUp(): void {
    void this._router.navigate(['/professor/cadastro']);
  }

  onSignInWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
      }).catch((err) => {
        console.error(err)
      })
  }
}
