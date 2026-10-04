import { FormControl } from "@angular/forms";

export interface ILoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

export enum RedirectedFrom {
  SignUp = 'sign-up',
  SignIn = 'sign-in'
}

export interface ISignUpForm {
  username: FormControl<string>;
  email: FormControl<string>;
  userRole: FormControl<'athlete' | 'coach'>;
  password: FormControl<string>;
  passwordConfirm: FormControl<string>;
}
