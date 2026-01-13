import type { DeepPartial, DeepReadonly } from '../types';
import type { Path, PathValue } from '../types';

/**
 * Object utility functions
 */

export type ObjectOptions<T = any> = {
  readonly config?: DeepPartial<T>;
  readonly path?: Path<T>;
};

export function objectUtil<T>(value: T, options?: ObjectOptions<T>): T {
  return value;
}

export type ObjectResult<T> = {
  readonly value: DeepReadonly<T>;
  readonly transformed: boolean;
};

export function transformObject<T>(
  input: T
): ObjectResult<T> {
  return {
    value: input as DeepReadonly<T>,
    transformed: true,
  };
}
