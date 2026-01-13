/**
 * Tooltip component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type TooltipProps = StyledProps<
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

export const Tooltip: FC<TooltipProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicTooltipProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, TooltipProps & AsProp<C>>;

export function PolymorphicTooltip<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicTooltipProps<C>
): { type: C; props: PolymorphicTooltipProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
