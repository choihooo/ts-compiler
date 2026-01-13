/**
 * Radio component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type RadioProps = StyledProps<
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

export const Radio: FC<RadioProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicRadioProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, RadioProps & AsProp<C>>;

export function PolymorphicRadio<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicRadioProps<C>
): { type: C; props: PolymorphicRadioProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
