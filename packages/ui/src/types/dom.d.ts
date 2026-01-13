/**
 * Minimal DOM type definitions for compilation
 */

export type HTMLElement = {
  readonly tagName: string;
  readonly id?: string;
  readonly className?: string;
};

export type HTMLButtonElement = HTMLElement & {
  readonly type?: 'button' | 'submit' | 'reset';
  readonly disabled?: boolean;
};

export type HTMLInputElement = HTMLElement & {
  readonly type?: string;
  readonly value?: string;
  readonly placeholder?: string;
};

export type HTMLDivElement = HTMLElement;
export type HTMLSpanElement = HTMLElement;
export type HTMLFormElement = HTMLElement;
export type HTMLLabelElement = HTMLElement;
export type HTMLSelectElement = HTMLElement;
export type HTMLTextAreaElement = HTMLElement;
export type HTMLAnchorElement = HTMLElement;
export type HTMLImageElement = HTMLElement;
export type HTMLParagraphElement = HTMLElement;
export type HTMLHeadingElement = HTMLElement;
export type HTMLUListElement = HTMLElement;
export type HTMLOListElement = HTMLElement;
export type HTMLLIElement = HTMLElement;
