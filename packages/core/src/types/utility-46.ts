import type { DeepPartial, DeepReadonly, Path, PathValue } from './index';
import type { IsPromise, IsArray, IsObject } from './conditional';
import type { PromiseValue } from './utility';

/**
 * Additional utility type 46
 */

export type Utility46Base<T> = {
  readonly value: DeepReadonly<T>;
  readonly path?: Path<T>;
};

export type Utility46Options<T = any> = DeepPartial<Utility46Base<T>>;

export type Utility46Result<T> = IsPromise<T> extends true
  ? Promise<DeepReadonly<PromiseValue<T>>>
  : DeepReadonly<T>;

export type Utility46Transform<T, U = T> = {
  readonly input: DeepReadonly<T>;
  readonly output: DeepReadonly<U>;
  readonly transformed: boolean;
};

export function utility46<T>(value: T): Utility46Result<T> {
  return value as Utility46Result<T>;
}

export function transformUtility46<T, U = T>(
  input: T,
  transform?: (value: DeepReadonly<T>) => U
): Utility46Transform<T, U> {
  return {
    input: input as DeepReadonly<T>,
    output: (transform ? transform(input as DeepReadonly<T>) : (input as unknown as U)) as DeepReadonly<U>,
    transformed: transform !== undefined,
  };
}
