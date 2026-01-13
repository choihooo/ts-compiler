/**
 * Link component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type LinkProps = StyledProps<
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

export const Link: FC<LinkProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicLinkProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, LinkProps & AsProp<C>>;

export function PolymorphicLink<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicLinkProps<C>
): { type: C; props: PolymorphicLinkProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
