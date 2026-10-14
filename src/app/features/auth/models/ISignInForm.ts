import { FormControl } from "@angular/forms";

export interface ISignInForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

type FormValue<T> = {
  [K in keyof T]: T[K] extends FormControl<infer V> ? V : never;
};

export type ISignInFormData = FormValue<ISignInForm>;
