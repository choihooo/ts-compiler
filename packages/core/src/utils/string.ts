import type { DeepPartial, DeepReadonly } from '../types';
import type { Path, PathValue } from '../types';

/**
 * String utility functions
 */

export type StringOptions<T = any> = {
  readonly config?: DeepPartial<T>;
  readonly path?: Path<T>;
};

export function stringUtil<T>(value: T, options?: StringOptions<T>): T {
  return value;
}

export type StringResult<T> = {
  readonly value: DeepReadonly<T>;
  readonly transformed: boolean;
};

export function transformString<T>(
  input: T
): StringResult<T> {
  return {
    value: input as DeepReadonly<T>,
    transformed: true,
  };
}
