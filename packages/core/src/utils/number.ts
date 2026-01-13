import type { DeepPartial, DeepReadonly } from '../types';
import type { Path, PathValue } from '../types';

/**
 * Number utility functions
 */

export type NumberOptions<T = any> = {
  readonly config?: DeepPartial<T>;
  readonly path?: Path<T>;
};

export function numberUtil<T>(value: T, options?: NumberOptions<T>): T {
  return value;
}

export type NumberResult<T> = {
  readonly value: DeepReadonly<T>;
  readonly transformed: boolean;
};

export function transformNumber<T>(
  input: T
): NumberResult<T> {
  return {
    value: input as DeepReadonly<T>,
    transformed: true,
  };
}
