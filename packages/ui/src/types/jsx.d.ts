/**
 * JSX type definitions
 */

import type { DeepReadonly } from '@bench/core';
import type { ReactElement, ReactNode, Attributes, ClassAttributes } from './react';

export namespace JSX {
  export interface Element extends ReactElement<any, any> {}

  export interface ElementClass {
    render(): ReactNode;
  }

  export interface ElementAttributesProperty {
    props: {};
  }

  export interface ElementChildrenAttribute {
    children: {};
  }

  export type LibraryManagedAttributes<C, P> = P;

  export interface IntrinsicAttributes extends Attributes {}

  export interface IntrinsicClassAttributes<T> extends ClassAttributes<T> {}

  export interface IntrinsicElements {
    div: HTMLDivElementAttributes;
    span: HTMLSpanElementAttributes;
    button: HTMLButtonElementAttributes;
    input: HTMLInputElementAttributes;
    form: HTMLFormElementAttributes;
    label: HTMLLabelElementAttributes;
    select: HTMLSelectElementAttributes;
    textarea: HTMLTextAreaElementAttributes;
    a: HTMLAnchorElementAttributes;
    img: HTMLImageElementAttributes;
    p: HTMLParagraphElementAttributes;
    h1: HTMLHeadingElementAttributes;
    h2: HTMLHeadingElementAttributes;
    h3: HTMLHeadingElementAttributes;
    h4: HTMLHeadingElementAttributes;
    h5: HTMLHeadingElementAttributes;
    h6: HTMLHeadingElementAttributes;
    ul: HTMLUListElementAttributes;
    ol: HTMLOListElementAttributes;
    li: HTMLLIElementAttributes;
    section: HTMLElementAttributes;
    article: HTMLElementAttributes;
    header: HTMLElementAttributes;
    footer: HTMLElementAttributes;
    nav: HTMLElementAttributes;
    main: HTMLElementAttributes;
    aside: HTMLElementAttributes;
  }

  export interface HTMLAttributes extends Attributes {
    readonly id?: string;
    readonly className?: string;
    readonly style?: DeepReadonly<Record<string, string | number>>;
    readonly title?: string;
    readonly role?: string;
    readonly 'data-testid'?: string;
    readonly 'aria-label'?: string;
    readonly 'aria-labelledby'?: string;
    readonly 'aria-describedby'?: string;
    readonly onClick?: () => void;
    readonly onFocus?: () => void;
    readonly onBlur?: () => void;
    readonly onMouseEnter?: () => void;
    readonly onMouseLeave?: () => void;
    readonly children?: ReactNode;
  }

  export interface HTMLDivElementAttributes extends HTMLAttributes {}
  export interface HTMLSpanElementAttributes extends HTMLAttributes {}
  export interface HTMLButtonElementAttributes extends HTMLAttributes {
    readonly type?: 'button' | 'submit' | 'reset';
    readonly disabled?: boolean;
  }
  export interface HTMLInputElementAttributes extends HTMLAttributes {
    readonly type?: string;
    readonly value?: string;
    readonly defaultValue?: string;
    readonly placeholder?: string;
    readonly disabled?: boolean;
    readonly required?: boolean;
    readonly readOnly?: boolean;
    readonly onChange?: (value: string) => void;
  }
  export interface HTMLFormElementAttributes extends HTMLAttributes {
    readonly onSubmit?: () => void;
  }
  export interface HTMLLabelElementAttributes extends HTMLAttributes {
    readonly htmlFor?: string;
  }
  export interface HTMLSelectElementAttributes extends HTMLAttributes {
    readonly value?: string;
    readonly defaultValue?: string;
    readonly disabled?: boolean;
    readonly onChange?: (value: string) => void;
  }
  export interface HTMLTextAreaElementAttributes extends HTMLAttributes {
    readonly value?: string;
    readonly defaultValue?: string;
    readonly placeholder?: string;
    readonly disabled?: boolean;
    readonly required?: boolean;
    readonly readOnly?: boolean;
    readonly onChange?: (value: string) => void;
  }
  export interface HTMLAnchorElementAttributes extends HTMLAttributes {
    readonly href?: string;
    readonly target?: string;
  }
  export interface HTMLImageElementAttributes extends HTMLAttributes {
    readonly src?: string;
    readonly alt?: string;
    readonly width?: number;
    readonly height?: number;
  }
  export interface HTMLParagraphElementAttributes extends HTMLAttributes {}
  export interface HTMLHeadingElementAttributes extends HTMLAttributes {}
  export interface HTMLUListElementAttributes extends HTMLAttributes {}
  export interface HTMLOListElementAttributes extends HTMLAttributes {}
  export interface HTMLLIElementAttributes extends HTMLAttributes {}
  export interface HTMLElementAttributes extends HTMLAttributes {}
}
