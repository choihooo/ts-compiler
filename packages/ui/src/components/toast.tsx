/**
 * Toast component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type ToastProps = StyledProps<
  AccessibleProps<
    InteractiveProps<
      PropsWithChildren<{
        readonly variant?: 'default' | 'primary' | 'secondary';
        readonly size?: 'small' | 'medium' | 'large';
        readonly disabled?: boolean;
      }>
    >
  >
>;

export const Toast: FC<ToastProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicToastProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, ToastProps & AsProp<C>>;

export function PolymorphicToast<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicToastProps<C>
): { type: C; props: PolymorphicToastProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
