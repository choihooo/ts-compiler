/**
 * State management hooks (fake React hooks)
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';

export type UseStateResult<T> = readonly [DeepReadonly<T>, (value: DeepPartial<T> | ((prev: T) => DeepPartial<T>)) => void];

export function useState<T>(initialValue: T): UseStateResult<T> {
  return [initialValue as DeepReadonly<T>, () => {}] as const;
}

export type UseReducerResult<T, A> = readonly [
  DeepReadonly<T>,
  (action: A) => void
];

export function useReducer<T, A>(
  reducer: (state: T, action: A) => T,
  initialState: T
): UseReducerResult<T, A> {
  return [initialState as DeepReadonly<T>, () => {}] as const;
}

export type UseMemoResult<T> = DeepReadonly<T>;

export function useMemo<T>(factory: () => T, deps: readonly unknown[]): UseMemoResult<T> {
  return factory() as DeepReadonly<T>;
}

export type UseCallbackResult<T extends (...args: any[]) => any> = DeepReadonly<T>;

export function useCallback<T extends (...args: any[]) => any>(
  callback: T,
  deps: readonly unknown[]
): UseCallbackResult<T> {
  return callback as DeepReadonly<T>;
}

export type UseRefResult<T> = {
  readonly current: T | null;
};

export function useRef<T>(initialValue: T | null = null): UseRefResult<T> {
  return { current: initialValue } as const;
}

export type UseEffectResult = () => void;

export function useEffect(effect: () => void | (() => void), deps?: readonly unknown[]): UseEffectResult {
  return () => {};
}

export type UseLayoutEffectResult = () => void;

export function useLayoutEffect(
  effect: () => void | (() => void),
  deps?: readonly unknown[]
): UseLayoutEffectResult {
  return () => {};
}

export type UseImperativeHandleResult = void;

export function useImperativeHandle<T, R extends T>(
  ref: { current: T | null } | ((instance: T | null) => void) | null,
  init: () => R,
  deps?: readonly unknown[]
): UseImperativeHandleResult {
  // No-op
}
