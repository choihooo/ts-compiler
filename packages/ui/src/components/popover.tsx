/**
 * Popover component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type PopoverProps = StyledProps<
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

export const Popover: FC<PopoverProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicPopoverProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, PopoverProps & AsProp<C>>;

export function PolymorphicPopover<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicPopoverProps<C>
): { type: C; props: PolymorphicPopoverProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
