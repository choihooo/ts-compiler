/**
 * Form management hooks
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { UseStateResult } from './state';

export type FormValues = DeepReadonly<Record<string, unknown>>;

export type FormErrors = DeepReadonly<Record<string, string | undefined>>;

export type FormTouched = DeepReadonly<Record<string, boolean>>;

export type FormState<T extends FormValues> = {
  readonly values: DeepReadonly<T>;
  readonly errors: FormErrors;
  readonly touched: FormTouched;
  readonly isSubmitting: boolean;
  readonly isValid: boolean;
};

export type UseFormResult<T extends FormValues> = {
  readonly values: DeepReadonly<T>;
  readonly errors: FormErrors;
  readonly touched: FormTouched;
  readonly setValue: <K extends keyof T>(name: K, value: T[K]) => void;
  readonly setError: (name: string, error: string | undefined) => void;
  readonly setTouched: (name: string, touched: boolean) => void;
  readonly handleChange: <K extends keyof T>(name: K) => (value: T[K]) => void;
  readonly handleBlur: (name: string) => () => void;
  readonly handleSubmit: (onSubmit: (values: DeepReadonly<T>) => void) => () => void;
  readonly reset: () => void;
  readonly validate: () => boolean;
};

export function useForm<T extends FormValues>(initialValues: T): UseFormResult<T> {
  return {
    values: initialValues as DeepReadonly<T>,
    errors: {},
    touched: {},
    setValue: () => {},
    setError: () => {},
    setTouched: () => {},
    handleChange: () => () => {},
    handleBlur: () => () => {},
    handleSubmit: () => () => {},
    reset: () => {},
    validate: () => true,
  };
}

export type FieldState<T> = {
  readonly value: DeepReadonly<T>;
  readonly error?: string;
  readonly touched: boolean;
  readonly onChange: (value: T) => void;
  readonly onBlur: () => void;
};

export type UseFieldResult<T> = FieldState<T>;

export function useField<T>(name: string, form: UseFormResult<FormValues>): UseFieldResult<T> {
  return {
    value: (form.values[name] as T) as DeepReadonly<T>,
    error: form.errors[name],
    touched: form.touched[name] || false,
    onChange: () => {},
    onBlur: () => {},
  };
}
