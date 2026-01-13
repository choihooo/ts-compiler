/**
 * Variant-based component implementations
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren } from '../types/react';
import type { VariantProps, ComponentWithVariants } from '../types/component';
import type { StyledProps, InteractiveProps } from '../types/props';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

export type VariantButtonProps = StyledProps<
  InteractiveProps<
    PropsWithChildren<{
      readonly variant?: ButtonVariant;
      readonly size?: ButtonSize;
      readonly disabled?: boolean;
      readonly loading?: boolean;
    }>
  >
>;

export const VariantButton: FC<VariantButtonProps> = (props) => {
  return { type: 'button', props };
};

export type CardVariant = 'outlined' | 'elevated' | 'filled';
export type CardSize = 'small' | 'medium' | 'large';

export type VariantCardProps = StyledProps<
  PropsWithChildren<{
    readonly variant?: CardVariant;
    readonly size?: CardSize;
    readonly elevation?: number;
  }>
>;

export const VariantCard: FC<VariantCardProps> = (props) => {
  return { type: 'div', props };
};

export type TextVariant = 'body' | 'caption' | 'heading' | 'label';
export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type VariantTextProps = StyledProps<
  PropsWithChildren<{
    readonly variant?: TextVariant;
    readonly size?: TextSize;
    readonly weight?: 'normal' | 'medium' | 'bold';
  }>
>;

export const VariantText: FC<VariantTextProps> = (props) => {
  return { type: 'p', props };
};

export type InputVariant = 'outlined' | 'filled' | 'standard';
export type InputSize = 'small' | 'medium' | 'large';

export type VariantInputProps = StyledProps<
  InteractiveProps<{
    readonly variant?: InputVariant;
    readonly size?: InputSize;
    readonly type?: string;
    readonly value?: string;
    readonly placeholder?: string;
    readonly disabled?: boolean;
    readonly error?: boolean;
  }>
>;

export const VariantInput: FC<VariantInputProps> = (props) => {
  return { type: 'input', props };
};

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error';
export type BadgeSize = 'small' | 'medium' | 'large';

export type VariantBadgeProps = StyledProps<
  PropsWithChildren<{
    readonly variant?: BadgeVariant;
    readonly size?: BadgeSize;
    readonly dot?: boolean;
  }>
>;

export const VariantBadge: FC<VariantBadgeProps> = (props) => {
  return { type: 'span', props };
};

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';
export type AlertSeverity = 'low' | 'medium' | 'high';

export type VariantAlertProps = StyledProps<
  PropsWithChildren<{
    readonly variant?: AlertVariant;
    readonly severity?: AlertSeverity;
    readonly closable?: boolean;
  }>
>;

export const VariantAlert: FC<VariantAlertProps> = (props) => {
  return { type: 'div', props };
};
