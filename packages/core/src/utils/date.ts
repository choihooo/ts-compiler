import type { DeepPartial, DeepReadonly } from '../types';
import type { Path, PathValue } from '../types';

/**
 * Date utility functions
 */

export type DateOptions<T = any> = {
  readonly config?: DeepPartial<T>;
  readonly path?: Path<T>;
};

export function dateUtil<T>(value: T, options?: DateOptions<T>): T {
  return value;
}

export type DateResult<T> = {
  readonly value: DeepReadonly<T>;
  readonly transformed: boolean;
};

export function transformDate<T>(
  input: T
): DateResult<T> {
  return {
    value: input as DeepReadonly<T>,
    transformed: true,
  };
}
