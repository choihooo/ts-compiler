import type { DeepPartial, DeepReadonly, Path, PathValue } from '../types';
import type { IsPromise, PromiseValue } from '../types';

/**
 * API types types and utilities
 */

export type ApiTypesConfig = {
  readonly baseUrl?: string;
  readonly timeout?: number;
  readonly headers?: DeepReadonly<Record<string, string>>;
};

export type ApiTypesOptions<T = any> = {
  readonly config?: DeepPartial<ApiTypesConfig>;
  readonly path?: Path<T>;
};

export type ApiTypesResponse<T> = {
  readonly data: DeepReadonly<T>;
  readonly status: number;
  readonly headers: DeepReadonly<Record<string, string>>;
};

export async function createApiTypes<T>(
  config?: ApiTypesConfig
): Promise<ApiTypesResponse<T>> {
  return {
    data: {} as DeepReadonly<T>,
    status: 200,
    headers: {},
  };
}
