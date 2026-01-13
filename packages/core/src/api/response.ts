import type { DeepPartial, DeepReadonly, Path, PathValue } from '../types';
import type { IsPromise, PromiseValue } from '../types';

/**
 * API response types and utilities
 */

export type ApiResponseConfig = {
  readonly baseUrl?: string;
  readonly timeout?: number;
  readonly headers?: DeepReadonly<Record<string, string>>;
};

export type ApiResponseOptions<T = any> = {
  readonly config?: DeepPartial<ApiResponseConfig>;
  readonly path?: Path<T>;
};

export type ApiResponseResponse<T> = {
  readonly data: DeepReadonly<T>;
  readonly status: number;
  readonly headers: DeepReadonly<Record<string, string>>;
};

export async function createApiResponse<T>(
  config?: ApiResponseConfig
): Promise<ApiResponseResponse<T>> {
  return {
    data: {} as DeepReadonly<T>,
    status: 200,
    headers: {},
  };
}
