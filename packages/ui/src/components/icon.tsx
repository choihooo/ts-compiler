/**
 * Icon component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type IconProps = StyledProps<
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

export const Icon: FC<IconProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicIconProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, IconProps & AsProp<C>>;

export function PolymorphicIcon<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicIconProps<C>
): { type: C; props: PolymorphicIconProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
