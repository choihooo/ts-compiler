/**
 * ClickOutside hook
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { UseStateResult, UseEffectResult } from './state';

export type UseClickOutsideResult<T = any> = {
  readonly value: DeepReadonly<T>;
  readonly setValue: (value: DeepPartial<T> | ((prev: T) => DeepPartial<T>)) => void;
  readonly reset: () => void;
};

export function useClickOutside<T = any>(initialValue: T): UseClickOutsideResult<T> {
  return {
    value: initialValue as DeepReadonly<T>,
    setValue: () => {},
    reset: () => {},
  };
}

export type UseClickOutsideOptions = {
  readonly enabled?: boolean;
  readonly onUpdate?: (value: any) => void;
};

export function useClickOutsideWithOptions<T = any>(
  initialValue: T,
  options?: UseClickOutsideOptions
): UseClickOutsideResult<T> {
  return {
    value: initialValue as DeepReadonly<T>,
    setValue: () => {},
    reset: () => {},
  };
}
