/**
 * Navbar component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type NavbarProps = StyledProps<
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

export const Navbar: FC<NavbarProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicNavbarProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, NavbarProps & AsProp<C>>;

export function PolymorphicNavbar<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicNavbarProps<C>
): { type: C; props: PolymorphicNavbarProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
