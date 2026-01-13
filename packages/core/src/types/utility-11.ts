import type { DeepPartial, DeepReadonly, Path, PathValue } from './index';
import type { IsPromise, IsArray, IsObject } from './conditional';
import type { PromiseValue } from './utility';

/**
 * Additional utility type 11
 */

export type Utility11Base<T> = {
  readonly value: DeepReadonly<T>;
  readonly path?: Path<T>;
};

export type Utility11Options<T = any> = DeepPartial<Utility11Base<T>>;

export type Utility11Result<T> = IsPromise<T> extends true
  ? Promise<DeepReadonly<PromiseValue<T>>>
  : DeepReadonly<T>;

export type Utility11Transform<T, U = T> = {
  readonly input: DeepReadonly<T>;
  readonly output: DeepReadonly<U>;
  readonly transformed: boolean;
};

export function utility11<T>(value: T): Utility11Result<T> {
  return value as Utility11Result<T>;
}

export function transformUtility11<T, U = T>(
  input: T,
  transform?: (value: DeepReadonly<T>) => U
): Utility11Transform<T, U> {
  return {
    input: input as DeepReadonly<T>,
    output: (transform ? transform(input as DeepReadonly<T>) : (input as unknown as U)) as DeepReadonly<U>,
    transformed: transform !== undefined,
  };
}
