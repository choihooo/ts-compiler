import type { DeepPartial, DeepReadonly, DeepRequired, DeepNullable } from '../types';
import type { Path, PathValue, NestedKeyOf } from '../types';

/**
 * Cart DTO types
 */

export type CartDto = {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly data: DeepReadonly<Record<string, unknown>>;
};

export type CartCreateDto = DeepPartial<Omit<CartDto, 'id' | 'createdAt' | 'updatedAt'>>;

export type CartUpdateDto = DeepPartial<Omit<CartDto, 'id' | 'createdAt'>>;

export type CartResponseDto = DeepReadonly<CartDto>;

export type CartPath = Path<CartDto>;

export type CartValueAtPath<P extends CartPath> = PathValue<CartDto, P>;

export function transformCartDto(
  input: unknown
): CartResponseDto {
  return input as CartResponseDto;
}

export function validateCartDto(
  dto: CartCreateDto
): dto is CartDto {
  return typeof dto === 'object' && dto !== null;
}
