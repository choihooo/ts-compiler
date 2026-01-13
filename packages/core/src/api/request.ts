import type { DeepPartial, DeepReadonly, Path, PathValue } from '../types';
import type { IsPromise, PromiseValue } from '../types';

/**
 * API request types and utilities
 */

export type ApiRequestConfig = {
  readonly baseUrl?: string;
  readonly timeout?: number;
  readonly headers?: DeepReadonly<Record<string, string>>;
};

export type ApiRequestOptions<T = any> = {
  readonly config?: DeepPartial<ApiRequestConfig>;
  readonly path?: Path<T>;
};

export type ApiRequestResponse<T> = {
  readonly data: DeepReadonly<T>;
  readonly status: number;
  readonly headers: DeepReadonly<Record<string, string>>;
};

export async function createApiRequest<T>(
  config?: ApiRequestConfig
): Promise<ApiRequestResponse<T>> {
  return {
    data: {} as DeepReadonly<T>,
    status: 200,
    headers: {},
  };
}
