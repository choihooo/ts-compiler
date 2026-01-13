import type { DeepPartial, DeepReadonly, Path, PathValue } from '../types';
import type { IsPromise, PromiseValue } from '../types';

/**
 * API client types and utilities
 */

export type ApiClientConfig = {
  readonly baseUrl?: string;
  readonly timeout?: number;
  readonly headers?: DeepReadonly<Record<string, string>>;
};

export type ApiClientOptions<T = any> = {
  readonly config?: DeepPartial<ApiClientConfig>;
  readonly path?: Path<T>;
};

export type ApiClientResponse<T> = {
  readonly data: DeepReadonly<T>;
  readonly status: number;
  readonly headers: DeepReadonly<Record<string, string>>;
};

export async function createApiClient<T>(
  config?: ApiClientConfig
): Promise<ApiClientResponse<T>> {
  return {
    data: {} as DeepReadonly<T>,
    status: 200,
    headers: {},
  };
}
