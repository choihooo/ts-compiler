import type { DeepPartial, DeepReadonly, DeepRequired, DeepNullable } from '../types';
import type { Path, PathValue, NestedKeyOf } from '../types';

/**
 * Product DTO types
 */

export type ProductDto = {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly data: DeepReadonly<Record<string, unknown>>;
};

export type ProductCreateDto = DeepPartial<Omit<ProductDto, 'id' | 'createdAt' | 'updatedAt'>>;

export type ProductUpdateDto = DeepPartial<Omit<ProductDto, 'id' | 'createdAt'>>;

export type ProductResponseDto = DeepReadonly<ProductDto>;

export type ProductPath = Path<ProductDto>;

export type ProductValueAtPath<P extends ProductPath> = PathValue<ProductDto, P>;

export function transformProductDto(
  input: unknown
): ProductResponseDto {
  return input as ProductResponseDto;
}

export function validateProductDto(
  dto: ProductCreateDto
): dto is ProductDto {
  return typeof dto === 'object' && dto !== null;
}
