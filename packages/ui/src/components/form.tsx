/**
 * Form component implementations
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { ForwardRefComponent } from '../types/component';
import type { FormProps, StyledProps, InteractiveProps } from '../types/props';

export type FormFieldProps = StyledProps<
  PropsWithChildren<{
    readonly label?: string;
    readonly error?: string;
    readonly required?: boolean;
    readonly disabled?: boolean;
  }>
>;

export const FormField: FC<FormFieldProps> = (props) => {
  return { type: 'div', props };
};

export type FormInputProps = FormProps<
  StyledProps<{
    readonly type?: string;
    readonly placeholder?: string;
  }>
>;

export const FormInput: FC<FormInputProps> = (props) => {
  return { type: 'input', props };
};

export type FormTextareaProps = FormProps<
  StyledProps<{
    readonly placeholder?: string;
    readonly rows?: number;
  }>
>;

export const FormTextarea: FC<FormTextareaProps> = (props) => {
  return { type: 'textarea', props };
};

export type FormSelectProps = FormProps<
  StyledProps<{
    readonly options?: ReadonlyArray<{ readonly value: string; readonly label: string }>;
  }>
>;

export const FormSelect: FC<FormSelectProps> = (props) => {
  return { type: 'select', props };
};

export type FormCheckboxProps = FormProps<
  StyledProps<{
    readonly checked?: boolean;
    readonly defaultChecked?: boolean;
  }>
>;

export const FormCheckbox: FC<FormCheckboxProps> = (props) => {
  return { type: 'input', props: { ...props, type: 'checkbox' } };
};

export type FormRadioProps = FormProps<
  StyledProps<{
    readonly checked?: boolean;
    readonly defaultChecked?: boolean;
    readonly value?: string;
  }>
>;

export const FormRadio: FC<FormRadioProps> = (props) => {
  return { type: 'input', props: { ...props, type: 'radio' } };
};

export type FormGroupProps = StyledProps<
  PropsWithChildren<{
    readonly direction?: 'row' | 'column';
    readonly spacing?: number;
  }>
>;

export const FormGroup: FC<FormGroupProps> = (props) => {
  return { type: 'div', props };
};

export type FormLabelProps = StyledProps<
  PropsWithChildren<{
    readonly htmlFor?: string;
    readonly required?: boolean;
  }>
>;

export const FormLabel: FC<FormLabelProps> = (props) => {
  return { type: 'label', props };
};

export type FormErrorProps = StyledProps<{
  readonly message?: string;
}>;

export const FormError: FC<FormErrorProps> = (props) => {
  return { type: 'span', props };
};

export type FormHelperTextProps = StyledProps<
  PropsWithChildren<{
    readonly text?: string;
  }>
>;

export const FormHelperText: FC<FormHelperTextProps> = (props) => {
  return { type: 'span', props };
};
