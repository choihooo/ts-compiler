import type { DeepPartial, DeepReadonly } from '../types';
import type { Path, PathValue } from '../types';

/**
 * Cache utility functions
 */

export type CacheOptions<T = any> = {
  readonly config?: DeepPartial<T>;
  readonly path?: Path<T>;
};

export function cacheUtil<T>(value: T, options?: CacheOptions<T>): T {
  return value;
}

export type CacheResult<T> = {
  readonly value: DeepReadonly<T>;
  readonly transformed: boolean;
};

export function transformCache<T>(
  input: T
): CacheResult<T> {
  return {
    value: input as DeepReadonly<T>,
    transformed: true,
  };
}
