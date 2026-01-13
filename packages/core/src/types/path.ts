/**
 * Path-based type utilities - for accessing nested object properties
 * Note: Simplified for TypeScript 3.9.5 compatibility (no template literal types)
 */

export type Path<T> = T extends object
  ? {
      [K in keyof T]: K extends string | number
        ? T[K] extends object
          ? string | string
          : string
        : never;
    }[keyof T]
  : never;

export type PathValue<T, P extends string> = P extends string
  ? string extends P
    ? any
    : P extends keyof T
    ? T[P]
    : any
  : never;

export type Paths<T> = T extends object
  ? {
      [K in keyof T]: K extends string | number
        ? T[K] extends object
          ? string | string
          : string
        : never;
    }[keyof T]
  : never;

export type Leaves<T> = T extends object
  ? {
      [K in keyof T]: Exclude<T[K], undefined> extends object
        ? Leaves<T[K]> extends infer L
          ? L extends string
            ? string
            : never
          : never
        : K;
    }[keyof T]
  : never;

export type NestedKeyOf<T extends object> = {
  [Key in keyof T & (string | number)]: T[Key] extends object
    ? string | string
    : string;
}[keyof T & (string | number)];

export type ValueAtPath<T, P extends string> = P extends string
  ? string extends P
    ? any
    : P extends keyof T
    ? T[P]
    : any
  : never;
