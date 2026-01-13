import type { DeepPartial, DeepReadonly, Path, PathValue } from './index';
import type { IsPromise, IsArray, IsObject } from './conditional';
import type { PromiseValue } from './utility';

/**
 * Additional utility type 23
 */

export type Utility23Base<T> = {
  readonly value: DeepReadonly<T>;
  readonly path?: Path<T>;
};

export type Utility23Options<T = any> = DeepPartial<Utility23Base<T>>;

export type Utility23Result<T> = IsPromise<T> extends true
  ? Promise<DeepReadonly<PromiseValue<T>>>
  : DeepReadonly<T>;

export type Utility23Transform<T, U = T> = {
  readonly input: DeepReadonly<T>;
  readonly output: DeepReadonly<U>;
  readonly transformed: boolean;
};

export function utility23<T>(value: T): Utility23Result<T> {
  return value as Utility23Result<T>;
}

export function transformUtility23<T, U = T>(
  input: T,
  transform?: (value: DeepReadonly<T>) => U
): Utility23Transform<T, U> {
  return {
    input: input as DeepReadonly<T>,
    output: (transform ? transform(input as DeepReadonly<T>) : (input as unknown as U)) as DeepReadonly<U>,
    transformed: transform !== undefined,
  };
}
