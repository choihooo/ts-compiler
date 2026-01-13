import type { DeepPartial, DeepReadonly, DeepRequired, DeepNullable } from '../types';
import type { Path, PathValue, NestedKeyOf } from '../types';

/**
 * Review DTO types
 */

export type ReviewDto = {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly data: DeepReadonly<Record<string, unknown>>;
};

export type ReviewCreateDto = DeepPartial<Omit<ReviewDto, 'id' | 'createdAt' | 'updatedAt'>>;

export type ReviewUpdateDto = DeepPartial<Omit<ReviewDto, 'id' | 'createdAt'>>;

export type ReviewResponseDto = DeepReadonly<ReviewDto>;

export type ReviewPath = Path<ReviewDto>;

export type ReviewValueAtPath<P extends ReviewPath> = PathValue<ReviewDto, P>;

export function transformReviewDto(
  input: unknown
): ReviewResponseDto {
  return input as ReviewResponseDto;
}

export function validateReviewDto(
  dto: ReviewCreateDto
): dto is ReviewDto {
  return typeof dto === 'object' && dto !== null;
}
