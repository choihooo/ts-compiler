import type { DeepPartial, DeepReadonly, DeepRequired, DeepNullable } from '../types';
import type { Path, PathValue, NestedKeyOf } from '../types';

/**
 * Category DTO types
 */

export type CategoryDto = {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly data: DeepReadonly<Record<string, unknown>>;
};

export type CategoryCreateDto = DeepPartial<Omit<CategoryDto, 'id' | 'createdAt' | 'updatedAt'>>;

export type CategoryUpdateDto = DeepPartial<Omit<CategoryDto, 'id' | 'createdAt'>>;

export type CategoryResponseDto = DeepReadonly<CategoryDto>;

export type CategoryPath = Path<CategoryDto>;

export type CategoryValueAtPath<P extends CategoryPath> = PathValue<CategoryDto, P>;

export function transformCategoryDto(
  input: unknown
): CategoryResponseDto {
  return input as CategoryResponseDto;
}

export function validateCategoryDto(
  dto: CategoryCreateDto
): dto is CategoryDto {
  return typeof dto === 'object' && dto !== null;
}
