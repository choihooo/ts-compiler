/**
 * Upload component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type UploadProps = StyledProps<
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

export const Upload: FC<UploadProps> = (props) => {
  return { type: 'div', props };
};

export type PolymorphicUploadProps<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, UploadProps & AsProp<C>>;

export function PolymorphicUpload<C extends ComponentType<any> = ComponentType<any>>(
  props: PolymorphicUploadProps<C>
): { type: C; props: PolymorphicUploadProps<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
