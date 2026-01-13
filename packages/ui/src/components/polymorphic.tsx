/**
 * Polymorphic component implementations
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type {
  ComponentType,
  ComponentProps,
  PropsWithChildren,
  Ref,
  FC,
} from '../types/react';
import type {
  PolymorphicComponentProps,
  PolymorphicRef,
  AsProp,
  PolymorphicComponentProp,
} from '../types/component';
import type { StyledProps, InteractiveProps } from '../types/props';

export type PolymorphicBoxProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProp<C, StyledProps<PropsWithChildren<{}>>>;

export function PolymorphicBox<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicBoxProps<C>
): { type: C; props: PolymorphicBoxProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}

export type PolymorphicButtonProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProp<
    C,
    StyledProps<
      InteractiveProps<{
        readonly disabled?: boolean;
        readonly loading?: boolean;
      }>
    >
  >;

export function PolymorphicButton<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicButtonProps<C>
): { type: C; props: PolymorphicButtonProps<C> } {
  return { type: (props.as as C) || ('button' as any), props };
}

export type PolymorphicTextProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProp<
    C,
    StyledProps<
      PropsWithChildren<{
        readonly variant?: 'body' | 'caption' | 'heading';
        readonly size?: 'small' | 'medium' | 'large';
      }>
    >
  >;

export function PolymorphicText<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicTextProps<C>
): { type: C; props: PolymorphicTextProps<C> } {
  return { type: (props.as as C) || ('p' as any), props };
}

export type PolymorphicContainerProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProp<
    C,
    StyledProps<
      PropsWithChildren<{
        readonly fluid?: boolean;
        readonly maxWidth?: string;
      }>
    >
  >;

export function PolymorphicContainer<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicContainerProps<C>
): { type: C; props: PolymorphicContainerProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}

export type PolymorphicStackProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProp<
    C,
    StyledProps<
      PropsWithChildren<{
        readonly direction?: 'row' | 'column';
        readonly spacing?: number;
      }>
    >
  >;

export function PolymorphicStack<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicStackProps<C>
): { type: C; props: PolymorphicStackProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
