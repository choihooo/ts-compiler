import type { DeepPartial, DeepReadonly, DeepRequired, DeepNullable } from '../types';
import type { Path, PathValue, NestedKeyOf } from '../types';

/**
 * Image DTO types
 */

export type ImageDto = {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly data: DeepReadonly<Record<string, unknown>>;
};

export type ImageCreateDto = DeepPartial<Omit<ImageDto, 'id' | 'createdAt' | 'updatedAt'>>;

export type ImageUpdateDto = DeepPartial<Omit<ImageDto, 'id' | 'createdAt'>>;

export type ImageResponseDto = DeepReadonly<ImageDto>;

export type ImagePath = Path<ImageDto>;

export type ImageValueAtPath<P extends ImagePath> = PathValue<ImageDto, P>;

export function transformImageDto(
  input: unknown
): ImageResponseDto {
  return input as ImageResponseDto;
}

export function validateImageDto(
  dto: ImageCreateDto
): dto is ImageDto {
  return typeof dto === 'object' && dto !== null;
}
