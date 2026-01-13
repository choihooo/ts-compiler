/**
 * Pagination component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type PaginationProps = StyledProps<
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

export const Pagination: FC<PaginationProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicPaginationProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, PaginationProps & AsProp<C>>;

export function PolymorphicPagination<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicPaginationProps<C>
): { type: C; props: PolymorphicPaginationProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
