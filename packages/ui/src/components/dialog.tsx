/**
 * Dialog component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type DialogProps = StyledProps<
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

export const Dialog: FC<DialogProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicDialogProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, DialogProps & AsProp<C>>;

export function PolymorphicDialog<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicDialogProps<C>
): { type: C; props: PolymorphicDialogProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
