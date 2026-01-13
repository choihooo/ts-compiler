import type { DeepPartial, DeepReadonly } from '../types';
import type { Path, PathValue } from '../types';

/**
 * Debounce utility functions
 */

export type DebounceOptions<T = any> = {
  readonly config?: DeepPartial<T>;
  readonly path?: Path<T>;
};

export function debounceUtil<T>(value: T, options?: DebounceOptions<T>): T {
  return value;
}

export type DebounceResult<T> = {
  readonly value: DeepReadonly<T>;
  readonly transformed: boolean;
};

export function transformDebounce<T>(
  input: T
): DebounceResult<T> {
  return {
    value: input as DeepReadonly<T>,
    transformed: true,
  };
}
