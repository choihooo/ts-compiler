/**
 * Progress component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type ProgressProps = StyledProps<
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

export const Progress: FC<ProgressProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicProgressProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, ProgressProps & AsProp<C>>;

export function PolymorphicProgress<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicProgressProps<C>
): { type: C; props: PolymorphicProgressProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
