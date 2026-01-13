import type { DeepPartial, DeepReadonly, Path, PathValue } from '../types';
import type { IsPromise, PromiseValue } from '../types';

/**
 * API middleware types and utilities
 */

export type ApiMiddlewareConfig = {
  readonly baseUrl?: string;
  readonly timeout?: number;
  readonly headers?: DeepReadonly<Record<string, string>>;
};

export type ApiMiddlewareOptions<T = any> = {
  readonly config?: DeepPartial<ApiMiddlewareConfig>;
  readonly path?: Path<T>;
};

export type ApiMiddlewareResponse<T> = {
  readonly data: DeepReadonly<T>;
  readonly status: number;
  readonly headers: DeepReadonly<Record<string, string>>;
};

export async function createApiMiddleware<T>(
  config?: ApiMiddlewareConfig
): Promise<ApiMiddlewareResponse<T>> {
  return {
    data: {} as DeepReadonly<T>,
    status: 200,
    headers: {},
  };
}
