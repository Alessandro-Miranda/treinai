import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ButtonDirective } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputPassword } from 'primeng/inputpassword';
import { InputText } from 'primeng/inputtext';
import { ISignUpForm } from '../../models/IAuthForm';

@Component({
  imports: [
    ReactiveFormsModule,
    FloatLabel,
    InputText,
    IconField,
    InputIcon,
    InputPassword,
    ButtonDirective,
  ],
  selector: 'app-coach-sign-up',
  styleUrl: './coach-sign-up.scss',
  templateUrl: './coach-sign-up.html',
})
export class CoachSignUp {
  private readonly _fb = inject(FormBuilder);

  signUpForm = this._fb.group<ISignUpForm>(
    {
      name: this._fb.nonNullable.control('', [Validators.required, Validators.minLength(3)]),
      email: this._fb.nonNullable.control('', [Validators.required, Validators.email]),
      password: this._fb.nonNullable.control('', [Validators.required, Validators.minLength(8)]),
      passwordConfirm: this._fb.nonNullable.control('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    },
    {
      validators: this._passwordConfirmValidator(),
    },
  );

  isNameInvalid() {
    const name = this.signUpForm.controls.name;
    return name.invalid && name.dirty;
  }

  isEmailInvalid() {
    const email = this.signUpForm.controls.email;
    return email.invalid && email.dirty;
  }

  isPasswordInvalid() {
    const pwd = this.signUpForm.controls.password;
    return pwd.invalid && pwd.dirty;
  }

  isPasswordConfirmInvalid() {
    const pwdConfirm = this.signUpForm.controls.passwordConfirm;
    const isPwdConfirmFilled = pwdConfirm.dirty || pwdConfirm.touched;
    return this.signUpForm.hasError('passwordNotMatch') && isPwdConfirmFilled;
  }

  onSubmit() {
    console.log('enviando');
  }

  private _passwordConfirmValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const pwd = group.get('password') as AbstractControl<string>;
      const pwdConfirm = group.get('passwordConfirm') as AbstractControl<string>;

      if (!pwdConfirm) return null;

      const isInvalid = pwd.value !== pwdConfirm.value;

      return isInvalid ? { passwordNotMatch: true } : null
    }
  }
}
