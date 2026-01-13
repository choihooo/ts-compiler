/**
 * Component type utilities
 */

import type {
  DeepPartial,
  DeepReadonly,
  Path,
  PathValue,
  RequireAtLeastOne,
  RequireExactlyOne,
} from '@bench/core';
import type { ComponentType, ComponentProps, PropsWithChildren, Ref } from './react';

export type PolymorphicComponentProps<
  T extends ComponentType<any>,
  P = {}
> = ComponentProps<T> & P;

export type PolymorphicRef<T extends ComponentType<any>> = T extends ComponentType<infer P>
  ? P extends { ref?: infer R }
    ? R
    : never
  : never;

export type AsProp<C extends ComponentType<any>> = {
  readonly as?: C;
};

export type PolymorphicComponentProp<
  C extends ComponentType<any>,
  Props = {}
> = PolymorphicComponentProps<C, Props & AsProp<C>>;

export type VariantProps<T> = T extends (...args: any[]) => any
  ? Parameters<T>[0] extends { variants?: infer V }
    ? V extends Record<string, Record<string, any>>
      ? {
          [K in keyof V]?: keyof V[K];
        }
      : never
    : never
  : never;

export type ComponentWithVariants<
  T extends ComponentType<any>,
  V extends Record<string, Record<string, any>>
> = T & {
  readonly variants: DeepReadonly<V>;
  readonly defaultVariants?: DeepPartial<{
    [K in keyof V]?: keyof V[K];
  }>;
};

export type ComponentWithRef<T extends ComponentType<any>, R = any> = T & {
  readonly ref?: Ref<R>;
};

export type ForwardRefComponent<T, P = {}> = ComponentType<P & { ref?: Ref<T> }>;

export type MemoComponent<T extends ComponentType<any>> = T & {
  readonly compare?: (prevProps: ComponentProps<T>, nextProps: ComponentProps<T>) => boolean;
};

export type LazyComponent<T extends ComponentType<any>> = () => Promise<{ default: T }>;

export type ComponentSlotProps<T extends ComponentType<any>> = {
  readonly [K in keyof ComponentProps<T>]: ComponentProps<T>[K];
};

export type ComponentBaseProps<T extends ComponentType<any>> = Omit<
  ComponentProps<T>,
  keyof ComponentSlotProps<T>
>;
