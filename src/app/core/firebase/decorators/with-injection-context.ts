import { runInInjectionContext } from "@angular/core";
import { FirebaseContext } from "./firebase-context";

export function withInjectionContext(descriptor: any) {
  const originalMethod = descriptor;

  const wrapper = function (this: FirebaseContext, ...args: any[]) {
    return runInInjectionContext(this.injectionContext, () => {
      return originalMethod.apply(this, args);
    });
  };

  Object.defineProperty(wrapper, 'name', { value: originalMethod.name });
  Object.defineProperty(wrapper, 'length', { value: originalMethod.length });

  return wrapper;
}
