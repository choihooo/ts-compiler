import type { DeepPartial, DeepReadonly, DeepRequired, DeepNullable } from '../types';
import type { Path, PathValue, NestedKeyOf } from '../types';

/**
 * Shipping DTO types
 */

export type ShippingDto = {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly data: DeepReadonly<Record<string, unknown>>;
};

export type ShippingCreateDto = DeepPartial<Omit<ShippingDto, 'id' | 'createdAt' | 'updatedAt'>>;

export type ShippingUpdateDto = DeepPartial<Omit<ShippingDto, 'id' | 'createdAt'>>;

export type ShippingResponseDto = DeepReadonly<ShippingDto>;

export type ShippingPath = Path<ShippingDto>;

export type ShippingValueAtPath<P extends ShippingPath> = PathValue<ShippingDto, P>;

export function transformShippingDto(
  input: unknown
): ShippingResponseDto {
  return input as ShippingResponseDto;
}

export function validateShippingDto(
  dto: ShippingCreateDto
): dto is ShippingDto {
  return typeof dto === 'object' && dto !== null;
}
