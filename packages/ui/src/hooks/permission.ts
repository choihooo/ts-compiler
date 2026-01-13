/**
 * Permission hook
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { UseStateResult, UseEffectResult } from './state';

export type UsePermissionResult<T = any> = {
  readonly value: DeepReadonly<T>;
  readonly setValue: (value: DeepPartial<T> | ((prev: T) => DeepPartial<T>)) => void;
  readonly reset: () => void;
};

export function usePermission<T = any>(initialValue: T): UsePermissionResult<T> {
  return {
    value: initialValue as DeepReadonly<T>,
    setValue: () => {},
    reset: () => {},
  };
}

export type UsePermissionOptions = {
  readonly enabled?: boolean;
  readonly onUpdate?: (value: any) => void;
};

export function usePermissionWithOptions<T = any>(
  initialValue: T,
  options?: UsePermissionOptions
): UsePermissionResult<T> {
  return {
    value: initialValue as DeepReadonly<T>,
    setValue: () => {},
    reset: () => {},
  };
}
