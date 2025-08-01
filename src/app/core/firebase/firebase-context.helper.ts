import { EnvironmentInjector, inject, Injectable, runInInjectionContext } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class FirebaseContext {
  private injector = inject(EnvironmentInjector);

  runInContext<T>(fn: () => Promise<T> | T): Promise<T> | T {
    return runInInjectionContext(this.injector, fn);
  }
}