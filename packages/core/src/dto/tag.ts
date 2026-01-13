import type { DeepPartial, DeepReadonly, DeepRequired, DeepNullable } from '../types';
import type { Path, PathValue, NestedKeyOf } from '../types';

/**
 * Tag DTO types
 */

export type TagDto = {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly data: DeepReadonly<Record<string, unknown>>;
};

export type TagCreateDto = DeepPartial<Omit<TagDto, 'id' | 'createdAt' | 'updatedAt'>>;

export type TagUpdateDto = DeepPartial<Omit<TagDto, 'id' | 'createdAt'>>;

export type TagResponseDto = DeepReadonly<TagDto>;

export type TagPath = Path<TagDto>;

export type TagValueAtPath<P extends TagPath> = PathValue<TagDto, P>;

export function transformTagDto(
  input: unknown
): TagResponseDto {
  return input as TagResponseDto;
}

export function validateTagDto(
  dto: TagCreateDto
): dto is TagDto {
  return typeof dto === 'object' && dto !== null;
}
