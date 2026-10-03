import { UserService } from '@/services/user/user.service';
import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import {
  AlertController,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonRow,
  IonToolbar,
  LoadingController
} from '@ionic/angular';
import { ISignUpForm, RedirectedFrom } from '../../models/ILogin';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonInput,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonInputPasswordToggle,
  ],
})
export class SignUpComponent implements OnInit {
  private readonly _route = inject(ActivatedRoute);
  private readonly _fb = inject(FormBuilder);
  private readonly _userService = inject(UserService);
  private readonly _router = inject(Router);
  private readonly _alertController = inject(AlertController);
  private readonly _loadingController = inject(LoadingController);

  private _loading: HTMLIonLoadingElement | null = null;
  
  isCompleteRegistration = true;
  signUpForm = this._fb.group<ISignUpForm>(
    {
      username: this._fb.nonNullable.control('', Validators.required),
      email: this._fb.nonNullable.control('', Validators.email),
      userRole: this._fb.nonNullable.control('athlete', Validators.required),
      password: this._fb.nonNullable.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      passwordConfirm: this._fb.nonNullable.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    },
    {
      validators: this._passwordConfirmValidator(),
    },
  );

  async ngOnInit(): Promise<void> {
    const redirectedFrom = this._route.snapshot.queryParamMap.get('from') as RedirectedFrom;

    if (redirectedFrom === RedirectedFrom.SignIn) return;

    this.isCompleteRegistration = false;
    this._updateValidatorsForSocialLogin();
    await this._preConfigureUserData();
  }

  private _updateValidatorsForSocialLogin() {
    const { password, passwordConfirm } = this.signUpForm.controls;
    
    password.clearValidators();
    passwordConfirm.clearValidators();
    password.updateValueAndValidity();
    passwordConfirm.updateValueAndValidity();
  }

  async continueRegistration() {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }

    this._showLoading();

    if (this.isCompleteRegistration) {
      await this._signUp();
    } else {
      await this._updateUserProfile();
    }
  }

  isPasswordConfirmationInvalid() {
    return this.signUpForm.hasError('passwordNotMatch');
  }

  isPasswordConfirmationTouched() {
    const pwdConfirm = this.signUpForm.controls.passwordConfirm;
    
    return pwdConfirm.touched || pwdConfirm.dirty; 
  }

  private _passwordConfirmValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const pwd = group.get('password') as AbstractControl<string>;
      const pwdConfirm = group.get(
        'passwordConfirm',
      ) as AbstractControl<string>;

      if(!pwdConfirm) return null;

      const isInvalid = pwd.value !== pwdConfirm.value;

      return isInvalid ? { passwordNotMatch: true } : null;
    };
  }

  private async _preConfigureUserData() {
    try {
      const { user } = await FirebaseAuthentication.getCurrentUser();
  
      if (!user) return;
  
      this.signUpForm.patchValue({
        username: user.displayName as string,
        email: user.email as string,
      });
    } catch(err) {
      return;
    }
  }
  
  private async _showLoading() {
    this._loading = await this._loadingController.create({
      message: 'Aguarde, estamos concluíndo seu cadastro...'
    });

    await this._loading.present();
  }

  private async _updateUserProfile() {
    const formData = this.signUpForm.getRawValue();

    try {
      const { user } = await FirebaseAuthentication.getCurrentUser();

      if (!user) throw new Error('An error has occured getting current user');

      await this._userService.updateProfile(user.uid, {
        username: formData.username,
        email: formData.email,
        isProfileComplete: true,
        role: formData.userRole,
      });

      void this._router.navigate(['/workouts'], { replaceUrl: true });
    } catch (err) {
      await this._showErrorMessage();
    } finally {
      this._loading?.dismiss();
    }
  }

  private async _signUp() {
    const signUpData = this.signUpForm.getRawValue();

    try {
      const user = await this._userService.createUser({
        username: signUpData.username,
        email: signUpData.email,
        password: signUpData.password,
        isProfileComplete: true,
        role: signUpData.userRole,
      });

      if (!user) throw new Error('An error has occured creating a new user');

      void this._router.navigate(['/workouts'], { replaceUrl: true });
    } catch (err) {
      await this._showErrorMessage();
    } finally {
      this._loading?.dismiss();
    }
  }

  private async _showErrorMessage() {
    const message = await this._alertController.create({
      header: 'Ops...',
      message:
        'Ocorreu um erro inesperado ao atualizar seu perfil. Por favor, tente novamente mais tarde',
    });

    await message.present();
  }
}
