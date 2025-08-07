import { withInjectionContext } from './with-injection-context';

export function RunInFirebaseContext<T extends { new (...args: any[]): {} }>(
  target: T
) {
  const descriptors = Object.getOwnPropertyDescriptors(target.prototype);

  for (const descriptor in descriptors) {
    if (descriptor === 'constructor') continue;

    target.prototype[descriptor] = withInjectionContext(
      target.prototype[descriptor]
    );
  }

  return target;
}