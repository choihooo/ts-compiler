/**
 * Ref management hooks
 */

import type { DeepReadonly } from '@bench/core';
import type { Ref, RefObject, RefCallback, MutableRefObject } from '../types/react';

export type UseForwardedRefResult<T> = Ref<T>;

export function useForwardedRef<T>(ref: Ref<T> | null): UseForwardedRefResult<T> {
  return ref;
}

export type UseMergeRefsResult<T> = RefCallback<T>;

export function useMergeRefs<T>(...refs: ReadonlyArray<Ref<T> | null>): UseMergeRefsResult<T> {
  return () => {};
}

export type UseComposedRefResult<T> = RefCallback<T>;

export function useComposedRef<T>(...refs: ReadonlyArray<Ref<T> | null>): UseComposedRefResult<T> {
  return () => {};
}
