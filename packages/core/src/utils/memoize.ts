import type { DeepPartial, DeepReadonly } from '../types';
import type { Path, PathValue } from '../types';

/**
 * Memoize utility functions
 */

export type MemoizeOptions<T = any> = {
  readonly config?: DeepPartial<T>;
  readonly path?: Path<T>;
};

export function memoizeUtil<T>(value: T, options?: MemoizeOptions<T>): T {
  return value;
}

export type MemoizeResult<T> = {
  readonly value: DeepReadonly<T>;
  readonly transformed: boolean;
};

export function transformMemoize<T>(
  input: T
): MemoizeResult<T> {
  return {
    value: input as DeepReadonly<T>,
    transformed: true,
  };
}
