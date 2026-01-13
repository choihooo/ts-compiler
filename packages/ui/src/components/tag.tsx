/**
 * Tag component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type TagProps = StyledProps<
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

export const Tag: FC<TagProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicTagProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, TagProps & AsProp<C>>;

export function PolymorphicTag<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicTagProps<C>
): { type: C; props: PolymorphicTagProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
