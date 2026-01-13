/**
 * Fake React types - mimicking React's type system without React dependency
 */

/// <reference path="./jsx.d.ts" />

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';

export type ReactNode = string | number | boolean | null | undefined | ReactElement | ReactNode[];

export interface ReactElement<P = any> {
  readonly type: string | ComponentType<P>;
  readonly props: P;
  readonly key?: string | number | null;
}

export type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;

export interface ComponentClass<P = {}, S = {}> {
  new (props: P, context?: any): Component<P, S>;
  readonly displayName?: string;
  readonly defaultProps?: DeepPartial<P>;
  readonly propTypes?: any;
}

export interface FunctionComponent<P = {}> {
  (props: P, context?: any): ReactElement<P> | null;
  readonly displayName?: string;
  readonly defaultProps?: DeepPartial<P>;
  readonly propTypes?: any;
}

export interface Component<P = {}, S = {}> {
  readonly props: DeepReadonly<P>;
  readonly state: DeepReadonly<S>;
  setState(state: DeepPartial<S> | ((prevState: S) => DeepPartial<S>)): void;
  forceUpdate(): void;
}

export type FC<P = {}> = FunctionComponent<P>;

export type ComponentProps<T extends keyof JSX.IntrinsicElements | ComponentType<any>> =
  T extends ComponentType<infer P>
    ? P
    : T extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[T]
    : Record<string, never>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export type PropsWithChildren<P = unknown> = P & {
  readonly children?: ReactNode;
};

export type PropsWithoutChildren<P> = Omit<P, 'children'>;

export type RefObject<T> = {
  readonly current: T | null;
};

export type RefCallback<T> = (instance: T | null) => void;

export type Ref<T> = RefCallback<T> | RefObject<T> | null;

export interface ForwardRefRenderFunction<T, P = {}> {
  (props: P, ref: Ref<T>): ReactElement | null;
}

export type ForwardRefExoticComponent<P> = FunctionComponent<P> & {
  readonly displayName?: string;
};

export interface MutableRefObject<T> {
  current: T;
}

export type LegacyRef<T> = string | Ref<T>;

export type Key = string | number;

export type ReactText = string | number;

export type ReactFragment = { readonly key?: Key } & {
  readonly children?: ReactNode;
};

export interface Attributes {
  readonly key?: Key;
}

export interface ClassAttributes<T> extends Attributes {
  readonly ref?: Ref<T>;
}
