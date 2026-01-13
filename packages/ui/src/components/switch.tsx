/**
 * Switch component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type SwitchProps = StyledProps<
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

export const Switch: FC<SwitchProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicSwitchProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, SwitchProps & AsProp<C>>;

export function PolymorphicSwitch<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicSwitchProps<C>
): { type: C; props: PolymorphicSwitchProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
