/**
 * Conditional type utilities
 */

export type If<C extends boolean, T, F> = C extends true ? T : F;

export type And<A extends boolean, B extends boolean> = A extends true
  ? B extends true
    ? true
    : false
  : false;

export type Or<A extends boolean, B extends boolean> = A extends true
  ? true
  : B extends true
  ? true
  : false;

export type Not<T extends boolean> = T extends true ? false : true;

export type IsNever<T> = [T] extends [never] ? true : false;

export type IsAny<T> = 0 extends 1 & T ? true : false;

export type IsUnknown<T> = IsNever<T> extends false
  ? T extends unknown
    ? unknown extends T
      ? IsAny<T> extends false
        ? true
        : false
      : false
    : false
  : false;

export type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

export type IsArray<T> = T extends readonly any[] ? true : false;

export type IsObject<T> = T extends object
  ? T extends any[]
    ? false
    : T extends Function
    ? false
    : true
  : false;

export type IsPrimitive<T> = T extends string | number | boolean | null | undefined
  ? true
  : false;

export type IsFunction<T> = T extends (...args: any[]) => any ? true : false;

export type IsPromise<T> = T extends Promise<infer _> ? true : false;

export type IsRecord<T> = T extends Record<string, any> ? true : false;
