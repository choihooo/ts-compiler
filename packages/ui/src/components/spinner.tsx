/**
 * Spinner component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type SpinnerProps = StyledProps<
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

export const Spinner: FC<SpinnerProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicSpinnerProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, SpinnerProps & AsProp<C>>;

export function PolymorphicSpinner<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicSpinnerProps<C>
): { type: C; props: PolymorphicSpinnerProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
