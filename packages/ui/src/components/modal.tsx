/**
 * Modal component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type ModalProps = StyledProps<
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

export const Modal: FC<ModalProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicModalProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, ModalProps & AsProp<C>>;

export function PolymorphicModal<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicModalProps<C>
): { type: C; props: PolymorphicModalProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
