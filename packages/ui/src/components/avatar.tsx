/**
 * Avatar component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type AvatarProps = StyledProps<
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

export const Avatar: FC<AvatarProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicAvatarProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, AvatarProps & AsProp<C>>;

export function PolymorphicAvatar<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicAvatarProps<C>
): { type: C; props: PolymorphicAvatarProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
