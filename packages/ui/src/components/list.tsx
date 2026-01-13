/**
 * List component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type ListProps = StyledProps<
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

export const List: FC<ListProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicListProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, ListProps & AsProp<C>>;

export function PolymorphicList<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicListProps<C>
): { type: C; props: PolymorphicListProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
