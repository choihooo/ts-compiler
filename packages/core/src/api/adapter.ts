import type { DeepPartial, DeepReadonly, Path, PathValue } from '../types';
import type { IsPromise, PromiseValue } from '../types';

/**
 * API adapter types and utilities
 */

export type ApiAdapterConfig = {
  readonly baseUrl?: string;
  readonly timeout?: number;
  readonly headers?: DeepReadonly<Record<string, string>>;
};

export type ApiAdapterOptions<T = any> = {
  readonly config?: DeepPartial<ApiAdapterConfig>;
  readonly path?: Path<T>;
};

export type ApiAdapterResponse<T> = {
  readonly data: DeepReadonly<T>;
  readonly status: number;
  readonly headers: DeepReadonly<Record<string, string>>;
};

export async function createApiAdapter<T>(
  config?: ApiAdapterConfig
): Promise<ApiAdapterResponse<T>> {
  return {
    data: {} as DeepReadonly<T>,
    status: 200,
    headers: {},
  };
}
