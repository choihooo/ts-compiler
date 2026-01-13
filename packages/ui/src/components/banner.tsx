/**
 * Banner component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type BannerProps = StyledProps<
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

export const Banner: FC<BannerProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicBannerProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, BannerProps & AsProp<C>>;

export function PolymorphicBanner<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicBannerProps<C>
): { type: C; props: PolymorphicBannerProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
