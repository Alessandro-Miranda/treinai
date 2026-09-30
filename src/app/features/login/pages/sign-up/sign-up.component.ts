import { UserService } from '@/services/user/user.service';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
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
  IonLoading,
  IonRow,
  IonToolbar,
} from '@ionic/angular';

interface ISignUpForm {
  username: FormControl<string>;
  email: FormControl<string>;
  userRole: FormControl<'athlete' | 'coach'>;
  password: FormControl<string>;
}

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
    IonLoading,
  ],
})
export class SignUpComponent implements OnInit {
  private readonly _route = inject(ActivatedRoute);
  private readonly _fb = inject(FormBuilder);
  private readonly _userService = inject(UserService);
  private readonly _router = inject(Router);
  private readonly _alertController = inject(AlertController);

  isCompleteRegistration = true;
  isRegistering = false;
  signUpForm = this._fb.group<ISignUpForm>({
    username: this._fb.nonNullable.control('', Validators.required),
    email: this._fb.nonNullable.control('', Validators.email),
    userRole: this._fb.nonNullable.control('athlete', Validators.required),
    password: this._fb.nonNullable.control(''),
  });

  ngOnInit(): void {
    const redirectedFrom = this._route.snapshot.queryParamMap.get('from') as
      | 'sign-in'
      | 'sign-up';

    this.isCompleteRegistration = redirectedFrom === 'sign-up';

    if (!this.isCompleteRegistration) {
      this._preConfigureUserData();
    }
  }

  async continueRegistration() {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }

    this.isRegistering = true;

    if (this.isCompleteRegistration) {
      await this._signUp();
    } else {
      await this._updateUserProfile();
    }
  }

  private async _preConfigureUserData() {
    const { user } = await FirebaseAuthentication.getCurrentUser();

    if (!user) return;

    this.signUpForm.patchValue({
      username: user.displayName as string,
      email: user.email as string,
    });
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

      this.isRegistering = false;

      this._router.navigate(['/workouts'], { replaceUrl: true });
    } catch (err) {
      await this._showErrorMessage();
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

      this.isRegistering = false;
      
      this._router.navigate(['/workouts'], { replaceUrl: true });
    } catch (err) {
      await this._showErrorMessage();
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
