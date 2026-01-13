import type { DeepPartial, DeepReadonly } from '../types';
import type { Path, PathValue } from '../types';

/**
 * Async utility functions
 */

export type AsyncOptions<T = any> = {
  readonly config?: DeepPartial<T>;
  readonly path?: Path<T>;
};

export function asyncUtil<T>(value: T, options?: AsyncOptions<T>): T {
  return value;
}

export type AsyncResult<T> = {
  readonly value: DeepReadonly<T>;
  readonly transformed: boolean;
};

export function transformAsync<T>(
  input: T
): AsyncResult<T> {
  return {
    value: input as DeepReadonly<T>,
    transformed: true,
  };
}
