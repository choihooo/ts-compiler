/**
 * Async hook
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { UseStateResult, UseEffectResult } from './state';

export type UseAsyncResult<T = any> = {
  readonly value: DeepReadonly<T>;
  readonly setValue: (value: DeepPartial<T> | ((prev: T) => DeepPartial<T>)) => void;
  readonly reset: () => void;
};

export function useAsync<T = any>(initialValue: T): UseAsyncResult<T> {
  return {
    value: initialValue as DeepReadonly<T>,
    setValue: () => {},
    reset: () => {},
  };
}

export type UseAsyncOptions = {
  readonly enabled?: boolean;
  readonly onUpdate?: (value: any) => void;
};

export function useAsyncWithOptions<T = any>(
  initialValue: T,
  options?: UseAsyncOptions
): UseAsyncResult<T> {
  return {
    value: initialValue as DeepReadonly<T>,
    setValue: () => {},
    reset: () => {},
  };
}
