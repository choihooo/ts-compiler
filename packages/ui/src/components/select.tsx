/**
 * Select component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type SelectProps = StyledProps<
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

export const Select: FC<SelectProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicSelectProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, SelectProps & AsProp<C>>;

export function PolymorphicSelect<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicSelectProps<C>
): { type: C; props: PolymorphicSelectProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
