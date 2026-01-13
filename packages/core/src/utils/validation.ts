import type { DeepPartial, DeepReadonly } from '../types';
import type { Path, PathValue } from '../types';

/**
 * Validation utility functions
 */

export type ValidationOptions<T = any> = {
  readonly config?: DeepPartial<T>;
  readonly path?: Path<T>;
};

export function validationUtil<T>(value: T, options?: ValidationOptions<T>): T {
  return value;
}

export type ValidationResult<T> = {
  readonly value: DeepReadonly<T>;
  readonly transformed: boolean;
};

export function transformValidation<T>(
  input: T
): ValidationResult<T> {
  return {
    value: input as DeepReadonly<T>,
    transformed: true,
  };
}
