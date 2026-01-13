import type { DeepPartial, DeepReadonly } from '../types';
import type { Path, PathValue } from '../types';

/**
 * Transform utility functions
 */

export type TransformOptions<T = any> = {
  readonly config?: DeepPartial<T>;
  readonly path?: Path<T>;
};

export function transformUtil<T>(value: T, options?: TransformOptions<T>): T {
  return value;
}

export type TransformResult<T> = {
  readonly value: DeepReadonly<T>;
  readonly transformed: boolean;
};

export function transformTransform<T>(
  input: T
): TransformResult<T> {
  return {
    value: input as DeepReadonly<T>,
    transformed: true,
  };
}
