/**
 * Sidebar component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type SidebarProps = StyledProps<
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

export const Sidebar: FC<SidebarProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicSidebarProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, SidebarProps & AsProp<C>>;

export function PolymorphicSidebar<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicSidebarProps<C>
): { type: C; props: PolymorphicSidebarProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
