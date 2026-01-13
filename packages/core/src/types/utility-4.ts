import type { DeepPartial, DeepReadonly, Path, PathValue } from './index';
import type { IsPromise, IsArray, IsObject } from './conditional';
import type { PromiseValue } from './utility';

/**
 * Additional utility type 4
 */

export type Utility4Base<T> = {
  readonly value: DeepReadonly<T>;
  readonly path?: Path<T>;
};

export type Utility4Options<T = any> = DeepPartial<Utility4Base<T>>;

export type Utility4Result<T> = IsPromise<T> extends true
  ? Promise<DeepReadonly<PromiseValue<T>>>
  : DeepReadonly<T>;

export type Utility4Transform<T, U = T> = {
  readonly input: DeepReadonly<T>;
  readonly output: DeepReadonly<U>;
  readonly transformed: boolean;
};

export function utility4<T>(value: T): Utility4Result<T> {
  return value as Utility4Result<T>;
}

export function transformUtility4<T, U = T>(
  input: T,
  transform?: (value: DeepReadonly<T>) => U
): Utility4Transform<T, U> {
  return {
    input: input as DeepReadonly<T>,
    output: (transform ? transform(input as DeepReadonly<T>) : (input as unknown as U)) as DeepReadonly<U>,
    transformed: transform !== undefined,
  };
}
