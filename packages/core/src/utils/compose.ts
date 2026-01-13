import type { DeepPartial, DeepReadonly } from '../types';
import type { Path, PathValue } from '../types';

/**
 * Compose utility functions
 */

export type ComposeOptions<T = any> = {
  readonly config?: DeepPartial<T>;
  readonly path?: Path<T>;
};

export function composeUtil<T>(value: T, options?: ComposeOptions<T>): T {
  return value;
}

export type ComposeResult<T> = {
  readonly value: DeepReadonly<T>;
  readonly transformed: boolean;
};

export function transformCompose<T>(
  input: T
): ComposeResult<T> {
  return {
    value: input as DeepReadonly<T>,
    transformed: true,
  };
}
