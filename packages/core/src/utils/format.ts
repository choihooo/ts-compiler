import type { DeepPartial, DeepReadonly } from '../types';
import type { Path, PathValue } from '../types';

/**
 * Format utility functions
 */

export type FormatOptions<T = any> = {
  readonly config?: DeepPartial<T>;
  readonly path?: Path<T>;
};

export function formatUtil<T>(value: T, options?: FormatOptions<T>): T {
  return value;
}

export type FormatResult<T> = {
  readonly value: DeepReadonly<T>;
  readonly transformed: boolean;
};

export function transformFormat<T>(
  input: T
): FormatResult<T> {
  return {
    value: input as DeepReadonly<T>,
    transformed: true,
  };
}
