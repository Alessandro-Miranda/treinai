import { FormControl } from "@angular/forms";

type FormValue<T> = {
  [K in keyof T]: T[K] extends FormControl<infer V> ? V : never;
};

export interface ISignInForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

export type ISignInFormData = FormValue<ISignInForm>;

export interface ISignUpForm {
  name: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  passwordConfirm: FormControl<string>;
}

export type ISignUpFormData = FormValue<ISignUpForm>;