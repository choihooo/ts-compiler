/**
 * Slider component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type SliderProps = StyledProps<
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

export const Slider: FC<SliderProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicSliderProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, SliderProps & AsProp<C>>;

export function PolymorphicSlider<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicSliderProps<C>
): { type: C; props: PolymorphicSliderProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
