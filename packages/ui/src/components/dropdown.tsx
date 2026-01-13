/**
 * Dropdown component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type DropdownProps = StyledProps<
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

export const Dropdown: FC<DropdownProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicDropdownProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, DropdownProps & AsProp<C>>;

export function PolymorphicDropdown<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicDropdownProps<C>
): { type: C; props: PolymorphicDropdownProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
