import { Routes } from "@angular/router";
import { AuthComponent } from "@features/auth/auth.component";

export const authRoutes: Routes = [
  {
    path: 'login',
    component: AuthComponent
  }
]