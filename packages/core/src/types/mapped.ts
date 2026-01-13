/**
 * Mapped type utilities
 */

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

export type ReadonlyBy<T, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;

export type MutableBy<T, K extends keyof T> = Omit<T, K> & {
  -readonly [P in K]: T[P];
};

export type PickByType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
} extends { [K in keyof T]: infer R }
  ? {
      [P in Extract<R, keyof T>]: T[P];
    }
  : never;

export type OmitByType<T, U> = {
  [K in keyof T]: T[K] extends U ? never : K;
} extends { [K in keyof T]: infer R }
  ? {
      [P in Extract<R, keyof T>]: T[P];
    }
  : never;

export type PickByValue<T, V> = {
  [K in keyof T]: T[K] extends V ? (V extends T[K] ? K : never) : never;
} extends { [K in keyof T]: infer R }
  ? {
      [P in Extract<R, keyof T>]: T[P];
    }
  : never;

export type OmitByValue<T, V> = {
  [K in keyof T]: T[K] extends V ? (V extends T[K] ? never : K) : K;
} extends { [K in keyof T]: infer R }
  ? {
      [P in Extract<R, keyof T>]: T[P];
    }
  : never;

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type Values<T> = T[keyof T];

export type Keys<T> = keyof T;

export type StringKeys<T> = Extract<keyof T, string>;

export type NumberKeys<T> = Extract<keyof T, number>;

export type SymbolKeys<T> = Extract<keyof T, symbol>;

export type Brand<T, B> = T & { __brand: B };

export type Unbrand<T> = Omit<T, '__brand'>;

export type Overwrite<T, U> = Omit<T, keyof U> & U;

export type Merge<T, U> = Omit<T, keyof U> & U;

export type Optionalize<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

export type RequireExactlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Omit<Partial<Pick<T, Exclude<Keys, K>>>, K>;
  }[Keys];
