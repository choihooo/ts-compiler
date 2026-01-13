/**
 * Table component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type TableProps = StyledProps<
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

export const Table: FC<TableProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicTableProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, TableProps & AsProp<C>>;

export function PolymorphicTable<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicTableProps<C>
): { type: C; props: PolymorphicTableProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
