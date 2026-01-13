/**
 * Image component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type ImageProps = StyledProps<
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

export const Image: FC<ImageProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicImageProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, ImageProps & AsProp<C>>;

export function PolymorphicImage<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicImageProps<C>
): { type: C; props: PolymorphicImageProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
