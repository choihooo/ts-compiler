import type { DeepPartial, DeepReadonly, Path, PathValue } from '../types';
import type { IsPromise, PromiseValue } from '../types';

/**
 * API error types and utilities
 */

export type ApiErrorConfig = {
  readonly baseUrl?: string;
  readonly timeout?: number;
  readonly headers?: DeepReadonly<Record<string, string>>;
};

export type ApiErrorOptions<T = any> = {
  readonly config?: DeepPartial<ApiErrorConfig>;
  readonly path?: Path<T>;
};

export type ApiErrorResponse<T> = {
  readonly data: DeepReadonly<T>;
  readonly status: number;
  readonly headers: DeepReadonly<Record<string, string>>;
};

export async function createApiError<T>(
  config?: ApiErrorConfig
): Promise<ApiErrorResponse<T>> {
  return {
    data: {} as DeepReadonly<T>,
    status: 200,
    headers: {},
  };
}
