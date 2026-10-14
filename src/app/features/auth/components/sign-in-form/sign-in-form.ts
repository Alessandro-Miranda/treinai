import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputPasswordModule } from 'primeng/inputpassword';
import { InputTextModule } from 'primeng/inputtext';
import { ISignInForm, ISignInFormData } from '../../models/ISignInForm';

@Component({
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    InputPasswordModule,
    IconFieldModule,
    InputIconModule,
    FloatLabelModule,
    DividerModule,
    ButtonModule,
  ],
  selector: 'app-sign-in-form',
  styleUrl: './sign-in-form.scss',
  templateUrl: './sign-in-form.html',
})
export class SignInForm {
  private readonly _fb = inject(FormBuilder);

  readonly signInForm = this._fb.group<ISignInForm>({
    email: this._fb.nonNullable.control('', [Validators.required, Validators.email]),
    password: this._fb.nonNullable.control('', [Validators.required, Validators.minLength(8)]),
  });

  readonly signIn = output<ISignInFormData>();
  readonly navigateToSignUp = output<void>();

  get email() {
    return this.signInForm.controls.email;
  }

  get password() {
    return this.signInForm.controls.password;
  }

  isEmailInvalid() {
    return this.email.dirty && this.email.invalid;
  }

  isPasswordInvalid() {
    return this.password.dirty && this.password.invalid;
  }

  onSubmit() {
    this.signIn.emit(this.signInForm.getRawValue())
  }

  onSignInWithGoogle() {
    console.log('logando com o google');
  }

  onNavigateToSignUp(): void {
    this.navigateToSignUp.emit();
  }
}
