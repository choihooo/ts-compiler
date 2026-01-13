import type { DeepPartial, DeepReadonly, Path, PathValue } from './index';
import type { PromiseValue } from './utility';
import type { IsPromise, IsArray, IsObject } from './conditional';

/**
 * Additional utility type 1
 */

export type Utility1Base<T> = {
  readonly value: DeepReadonly<T>;
  readonly path?: Path<T>;
};

export type Utility1Options<T = any> = DeepPartial<Utility1Base<T>>;

export type Utility1Result<T> = IsPromise<T> extends true
  ? Promise<DeepReadonly<PromiseValue<T>>>
  : DeepReadonly<T>;

export type Utility1Transform<T, U = T> = {
  readonly input: DeepReadonly<T>;
  readonly output: DeepReadonly<U>;
  readonly transformed: boolean;
};

export function utility1<T>(value: T): Utility1Result<T> {
  return value as Utility1Result<T>;
}

export function transformUtility1<T, U = T>(
  input: T,
  transform?: (value: DeepReadonly<T>) => U
): Utility1Transform<T, U> {
  return {
    input: input as DeepReadonly<T>,
    output: (transform ? transform(input as DeepReadonly<T>) : (input as unknown as U)) as DeepReadonly<U>,
    transformed: transform !== undefined,
  };
}
