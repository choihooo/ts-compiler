/**
 * Deep utility types - commonly used in frontend codebases
 */

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type DeepRequired<T> = T extends object
  ? {
      [P in keyof T]-?: DeepRequired<T[P]>;
    }
  : T;

export type DeepReadonly<T> = T extends object
  ? {
      readonly [P in keyof T]: DeepReadonly<T[P]>;
    }
  : T;

export type DeepMutable<T> = T extends object
  ? {
      -readonly [P in keyof T]: DeepMutable<T[P]>;
    }
  : T;

export type DeepNonNullable<T> = T extends object
  ? {
      [P in keyof T]: DeepNonNullable<NonNullable<T[P]>>;
    }
  : NonNullable<T>;

export type DeepNullable<T> = T extends object
  ? {
      [P in keyof T]: DeepNullable<T[P]> | null;
    }
  : T | null;

export type DeepPick<T, K extends string> = T extends object
  ? Pick<T, Extract<keyof T, K>> extends infer P
    ? {
        [Q in keyof P]: P[Q] extends object ? DeepPick<P[Q], K> : P[Q];
      }
    : never
  : T;

export type DeepOmit<T, K extends string> = T extends object
  ? Omit<T, Extract<keyof T, K>> extends infer P
    ? {
        [Q in keyof P]: P[Q] extends object ? DeepOmit<P[Q], K> : P[Q];
      }
    : never
  : T;
