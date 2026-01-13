/**
 * Hover hook
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { UseStateResult, UseEffectResult } from './state';

export type UseHoverResult<T = any> = {
  readonly value: DeepReadonly<T>;
  readonly setValue: (value: DeepPartial<T> | ((prev: T) => DeepPartial<T>)) => void;
  readonly reset: () => void;
};

export function useHover<T = any>(initialValue: T): UseHoverResult<T> {
  return {
    value: initialValue as DeepReadonly<T>,
    setValue: () => {},
    reset: () => {},
  };
}

export type UseHoverOptions = {
  readonly enabled?: boolean;
  readonly onUpdate?: (value: any) => void;
};

export function useHoverWithOptions<T = any>(
  initialValue: T,
  options?: UseHoverOptions
): UseHoverResult<T> {
  return {
    value: initialValue as DeepReadonly<T>,
    setValue: () => {},
    reset: () => {},
  };
}
