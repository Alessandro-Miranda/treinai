import { AuthService } from '@/core/services/auth/auth.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AlertController,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonRow,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import { ILoginForm, RedirectedFrom } from '../../models/ILogin';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  imports: [
    ReactiveFormsModule,
    IonContent,
    IonGrid,
    IonRow,
    IonInput,
    IonIcon,
    IonInputPasswordToggle,
    IonCol,
    IonButton,
  ],
})
export class SignInComponent {
  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);
  private readonly _alert = inject(AlertController);
  private readonly _fb = inject(FormBuilder);
  private readonly _loadingController = inject(LoadingController);
  private readonly _toastController = inject(ToastController);

  loginForm = this._fb.group<ILoginForm>({
    email: this._fb.nonNullable.control('', [
      Validators.required,
      Validators.email,
    ]),
    password: this._fb.nonNullable.control('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  isLoginError = false;

  private _loading: HTMLIonLoadingElement | null = null;

  async signIn() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this._showLoading();

    try {
      const loginData = this.loginForm.getRawValue();

      console.log('loginData', loginData);

      await this._authService.signIn(loginData);

      void this._router.navigate(['/workouts'], {
        queryParams: { from: RedirectedFrom.SignIn },
      });
    } catch (err) {
      await this._loading?.dismiss();
      await this._showLoginError();
    } finally {
      await this._loading?.dismiss();
    }
  }

  async signInWithGoogle() {
    try {
      await this._authService.socialSignIn();

      void this._router.navigate(['/workouts'], {
        queryParams: { from: RedirectedFrom.SignIn },
      });
    } catch (err: unknown) {
      const errorMessage = err as string;
      const canceledByUser = new RegExp(/[16]/);

      if (canceledByUser.exec(errorMessage)) {
        return;
      }

      const error = await this._alert.create({
        header: 'Ops...',
        message:
          'Ocorreu um erro inesperado. Por favor, tente novamente em instantes.',
        buttons: ['Ok'],
      });

      await error.present();
    }
  }

  signUp(): void {
    void this._router.navigate(['/sign-up'], {
      queryParams: { from: RedirectedFrom.SignUp },
    });
  }

  private async _showLoginError(): Promise<void> {
    const toast = await this._toastController.create({
      position: 'bottom',
      message: 'E-mail ou senha incorretos. Tente novamente.',
      color: 'danger',
      duration: 5000,
    });

    await toast.present();
  }

  private async _showLoading() {
    this._loading = await this._loadingController.create();
    await this._loading.present();
  }
}
