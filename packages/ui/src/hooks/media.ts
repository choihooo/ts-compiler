/**
 * Media hook
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { UseStateResult, UseEffectResult } from './state';

export type UseMediaResult<T = any> = {
  readonly value: DeepReadonly<T>;
  readonly setValue: (value: DeepPartial<T> | ((prev: T) => DeepPartial<T>)) => void;
  readonly reset: () => void;
};

export function useMedia<T = any>(initialValue: T): UseMediaResult<T> {
  return {
    value: initialValue as DeepReadonly<T>,
    setValue: () => {},
    reset: () => {},
  };
}

export type UseMediaOptions = {
  readonly enabled?: boolean;
  readonly onUpdate?: (value: any) => void;
};

export function useMediaWithOptions<T = any>(
  initialValue: T,
  options?: UseMediaOptions
): UseMediaResult<T> {
  return {
    value: initialValue as DeepReadonly<T>,
    setValue: () => {},
    reset: () => {},
  };
}
