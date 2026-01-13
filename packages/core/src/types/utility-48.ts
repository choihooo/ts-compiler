import type { DeepPartial, DeepReadonly, Path, PathValue } from './index';
import type { IsPromise, IsArray, IsObject } from './conditional';
import type { PromiseValue } from './utility';

/**
 * Additional utility type 48
 */

export type Utility48Base<T> = {
  readonly value: DeepReadonly<T>;
  readonly path?: Path<T>;
};

export type Utility48Options<T = any> = DeepPartial<Utility48Base<T>>;

export type Utility48Result<T> = IsPromise<T> extends true
  ? Promise<DeepReadonly<PromiseValue<T>>>
  : DeepReadonly<T>;

export type Utility48Transform<T, U = T> = {
  readonly input: DeepReadonly<T>;
  readonly output: DeepReadonly<U>;
  readonly transformed: boolean;
};

export function utility48<T>(value: T): Utility48Result<T> {
  return value as Utility48Result<T>;
}

export function transformUtility48<T, U = T>(
  input: T,
  transform?: (value: DeepReadonly<T>) => U
): Utility48Transform<T, U> {
  return {
    input: input as DeepReadonly<T>,
    output: (transform ? transform(input as DeepReadonly<T>) : (input as unknown as U)) as DeepReadonly<U>,
    transformed: transform !== undefined,
  };
}
