import { EnvironmentInjector, inject } from "@angular/core";

export abstract class FirebaseContext {
  public injectionContext = inject(EnvironmentInjector);
}
