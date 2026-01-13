/**
 * Badge component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type BadgeProps = StyledProps<
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

export const Badge: FC<BadgeProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicBadgeProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, BadgeProps & AsProp<C>>;

export function PolymorphicBadge<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicBadgeProps<C>
): { type: C; props: PolymorphicBadgeProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
