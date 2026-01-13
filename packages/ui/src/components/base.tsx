/**
 * Base component types and implementations
 */

import type {
  DeepPartial,
  DeepReadonly,
  Path,
  PathValue,
  RequireAtLeastOne,
} from '@bench/core';
import type { HTMLButtonElement } from '../types/dom';
import type {
  FC,
  ComponentType,
  ComponentProps,
  PropsWithChildren,
  Ref,
  ForwardRefRenderFunction,
  ForwardRefExoticComponent,
} from '../types/react';
import type {
  PolymorphicComponentProps,
  PolymorphicRef,
  AsProp,
  ForwardRefComponent,
} from '../types/component';
import type {
  PropsWithClassName,
  PropsWithStyle,
  StyledProps,
  InteractiveProps,
  AccessibleProps,
} from '../types/props';

export type ButtonProps = StyledProps<
  InteractiveProps<{
    readonly type?: 'button' | 'submit' | 'reset';
    readonly disabled?: boolean;
    readonly loading?: boolean;
  }>
>;

export const Button: FC<ButtonProps> = (props) => {
  return { type: 'button', props };
};

export type InputProps = StyledProps<
  InteractiveProps<{
    readonly type?: string;
    readonly value?: string;
    readonly defaultValue?: string;
    readonly placeholder?: string;
    readonly disabled?: boolean;
    readonly required?: boolean;
    readonly readOnly?: boolean;
  }>
>;

export const Input: FC<InputProps> = (props) => {
  return { type: 'input', props };
};

export type ContainerProps = StyledProps<
  PropsWithChildren<{
    readonly fluid?: boolean;
    readonly maxWidth?: string;
  }>
>;

export const Container: FC<ContainerProps> = (props) => {
  return { type: 'div', props };
};

export type BoxProps = StyledProps<
  PropsWithChildren<{
    readonly display?: 'block' | 'flex' | 'grid' | 'inline' | 'inline-block';
    readonly padding?: string;
    readonly margin?: string;
  }>
>;

export const Box: FC<BoxProps> = (props) => {
  return { type: 'div', props };
};

export type TextProps = StyledProps<
  PropsWithChildren<{
    readonly as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    readonly variant?: 'body' | 'caption' | 'heading';
    readonly size?: 'small' | 'medium' | 'large';
  }>
>;

export const Text: FC<TextProps> = (props) => {
  return { type: props.as || 'p', props };
};

export type CardProps = StyledProps<
  PropsWithChildren<{
    readonly elevation?: number;
    readonly variant?: 'outlined' | 'elevated' | 'filled';
  }>
>;

export const Card: FC<CardProps> = (props) => {
  return { type: 'div', props };
};

export type StackProps = StyledProps<
  PropsWithChildren<{
    readonly direction?: 'row' | 'column';
    readonly spacing?: number;
    readonly alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
    readonly justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  }>
>;

export const Stack: FC<StackProps> = (props) => {
  return { type: 'div', props };
};

export type GridProps = StyledProps<
  PropsWithChildren<{
    readonly columns?: number;
    readonly gap?: number;
    readonly rowGap?: number;
    readonly columnGap?: number;
  }>
>;

export const Grid: FC<GridProps> = (props) => {
  return { type: 'div', props };
};

export function forwardRef<T, P = {}>(
  render: ForwardRefRenderFunction<T, P>
): ForwardRefExoticComponent<P & { ref?: Ref<T> }> {
  return render as any;
}

export type ForwardRefButtonProps = ButtonProps & {
  ref?: Ref<HTMLButtonElement>;
};

export const ForwardRefButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return { type: 'button', props: { ...props, ref } };
});
