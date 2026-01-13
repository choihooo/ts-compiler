import type { DeepPartial, DeepReadonly } from '../types';
import type { Path, PathValue } from '../types';

/**
 * Throttle utility functions
 */

export type ThrottleOptions<T = any> = {
  readonly config?: DeepPartial<T>;
  readonly path?: Path<T>;
};

export function throttleUtil<T>(value: T, options?: ThrottleOptions<T>): T {
  return value;
}

export type ThrottleResult<T> = {
  readonly value: DeepReadonly<T>;
  readonly transformed: boolean;
};

export function transformThrottle<T>(
  input: T
): ThrottleResult<T> {
  return {
    value: input as DeepReadonly<T>,
    transformed: true,
  };
}
