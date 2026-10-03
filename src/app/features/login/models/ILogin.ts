import { FormControl } from "@angular/forms";

export enum RedirectedFrom {
  SocialLogin = 'social-login',
  SignIn = 'sign-in'
}

export interface ISignUpForm {
  username: FormControl<string>;
  email: FormControl<string>;
  userRole: FormControl<'athlete' | 'coach'>;
  password: FormControl<string>;
  passwordConfirm: FormControl<string>;
}
