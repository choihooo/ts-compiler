/**
 * Visibility hook
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { UseStateResult, UseEffectResult } from './state';

export type UseVisibilityResult<T = any> = {
  readonly value: DeepReadonly<T>;
  readonly setValue: (value: DeepPartial<T> | ((prev: T) => DeepPartial<T>)) => void;
  readonly reset: () => void;
};

export function useVisibility<T = any>(initialValue: T): UseVisibilityResult<T> {
  return {
    value: initialValue as DeepReadonly<T>,
    setValue: () => {},
    reset: () => {},
  };
}

export type UseVisibilityOptions = {
  readonly enabled?: boolean;
  readonly onUpdate?: (value: any) => void;
};

export function useVisibilityWithOptions<T = any>(
  initialValue: T,
  options?: UseVisibilityOptions
): UseVisibilityResult<T> {
  return {
    value: initialValue as DeepReadonly<T>,
    setValue: () => {},
    reset: () => {},
  };
}
