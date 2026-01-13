/**
 * Menu component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type MenuProps = StyledProps<
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

export const Menu: FC<MenuProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicMenuProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, MenuProps & AsProp<C>>;

export function PolymorphicMenu<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicMenuProps<C>
): { type: C; props: PolymorphicMenuProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
