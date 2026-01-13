import type { DeepPartial, DeepReadonly } from '../types';
import type { Path, PathValue } from '../types';

/**
 * Pipe utility functions
 */

export type PipeOptions<T = any> = {
  readonly config?: DeepPartial<T>;
  readonly path?: Path<T>;
};

export function pipeUtil<T>(value: T, options?: PipeOptions<T>): T {
  return value;
}

export type PipeResult<T> = {
  readonly value: DeepReadonly<T>;
  readonly transformed: boolean;
};

export function transformPipe<T>(
  input: T
): PipeResult<T> {
  return {
    value: input as DeepReadonly<T>,
    transformed: true,
  };
}
