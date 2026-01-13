import type { DeepPartial, DeepReadonly, Path, PathValue } from '../types';
import type { IsPromise, PromiseValue } from '../types';

/**
 * API interceptor types and utilities
 */

export type ApiInterceptorConfig = {
  readonly baseUrl?: string;
  readonly timeout?: number;
  readonly headers?: DeepReadonly<Record<string, string>>;
};

export type ApiInterceptorOptions<T = any> = {
  readonly config?: DeepPartial<ApiInterceptorConfig>;
  readonly path?: Path<T>;
};

export type ApiInterceptorResponse<T> = {
  readonly data: DeepReadonly<T>;
  readonly status: number;
  readonly headers: DeepReadonly<Record<string, string>>;
};

export async function createApiInterceptor<T>(
  config?: ApiInterceptorConfig
): Promise<ApiInterceptorResponse<T>> {
  return {
    data: {} as DeepReadonly<T>,
    status: 200,
    headers: {},
  };
}
