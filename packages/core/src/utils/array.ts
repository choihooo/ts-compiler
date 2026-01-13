import type { DeepPartial, DeepReadonly } from '../types';
import type { Path, PathValue } from '../types';

/**
 * Array utility functions
 */

export type ArrayOptions<T = any> = {
  readonly config?: DeepPartial<T>;
  readonly path?: Path<T>;
};

export function arrayUtil<T>(value: T, options?: ArrayOptions<T>): T {
  return value;
}

export type ArrayResult<T> = {
  readonly value: DeepReadonly<T>;
  readonly transformed: boolean;
};

export function transformArray<T>(
  input: T
): ArrayResult<T> {
  return {
    value: input as DeepReadonly<T>,
    transformed: true,
  };
}
