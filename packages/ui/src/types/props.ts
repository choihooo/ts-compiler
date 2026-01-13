/**
 * Props type utilities
 */

import type {
  DeepPartial,
  DeepReadonly,
  Path,
  PathValue,
  RequireAtLeastOne,
  RequireExactlyOne,
} from '@bench/core';
import type { ComponentProps, PropsWithChildren } from './react';

export type DefaultProps<T> = {
  readonly [K in keyof T]?: T[K];
};

export type RequiredProps<T> = {
  readonly [K in keyof T]-?: T[K];
};

export type OptionalProps<T> = {
  readonly [K in keyof T]?: T[K];
};

export type PropsWithDefault<T, D extends DeepPartial<T>> = Omit<T, keyof D> & D;

export type PropsWithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type PropsWithRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

export type PropsWithReadonly<T, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;

export type PropsWithMutable<T, K extends keyof T> = Omit<T, K> & {
  -readonly [P in K]: T[P];
};

export type MergeProps<T, U> = Omit<T, keyof U> & U;

export type OverrideProps<T, U> = Omit<T, keyof U> & U;

export type ExtendProps<T, U> = T & U;

export type PickProps<T, K extends keyof T> = Pick<T, K>;

export type OmitProps<T, K extends keyof T> = Omit<T, K>;

export type PropsPath<T> = Path<T>;

export type PropsValueAtPath<T, P extends PropsPath<T>> = PathValue<T, P>;

export type PropsWithClassName<T> = T & {
  readonly className?: string;
};

export type PropsWithStyle<T> = T & {
  readonly style?: DeepReadonly<Record<string, string | number>>;
};

export type PropsWithId<T> = T & {
  readonly id?: string;
};

export type PropsWithData<T> = T & {
  readonly 'data-testid'?: string;
  readonly 'data-cy'?: string;
};

export type PropsWithAria<T> = T & {
  readonly 'aria-label'?: string;
  readonly 'aria-labelledby'?: string;
  readonly 'aria-describedby'?: string;
};

export type AccessibleProps<T> = PropsWithAria<PropsWithData<T>>;

export type StyledProps<T> = PropsWithStyle<PropsWithClassName<T>>;

export type InteractiveProps<T> = T & {
  readonly onClick?: () => void;
  readonly onFocus?: () => void;
  readonly onBlur?: () => void;
  readonly onMouseEnter?: () => void;
  readonly onMouseLeave?: () => void;
};

export type FormProps<T> = T & {
  readonly name?: string;
  readonly value?: string;
  readonly defaultValue?: string;
  readonly onChange?: (value: string) => void;
  readonly onBlur?: () => void;
  readonly onFocus?: () => void;
  readonly disabled?: boolean;
  readonly required?: boolean;
  readonly readOnly?: boolean;
};
