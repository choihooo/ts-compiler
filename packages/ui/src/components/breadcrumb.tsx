/**
 * Breadcrumb component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type BreadcrumbProps = StyledProps<
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

export const Breadcrumb: FC<BreadcrumbProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicBreadcrumbProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, BreadcrumbProps & AsProp<C>>;

export function PolymorphicBreadcrumb<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicBreadcrumbProps<C>
): { type: C; props: PolymorphicBreadcrumbProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
