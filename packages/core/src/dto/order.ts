import type { DeepPartial, DeepReadonly, DeepRequired, DeepNullable } from '../types';
import type { Path, PathValue, NestedKeyOf } from '../types';

/**
 * Order DTO types
 */

export type OrderDto = {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly data: DeepReadonly<Record<string, unknown>>;
};

export type OrderCreateDto = DeepPartial<Omit<OrderDto, 'id' | 'createdAt' | 'updatedAt'>>;

export type OrderUpdateDto = DeepPartial<Omit<OrderDto, 'id' | 'createdAt'>>;

export type OrderResponseDto = DeepReadonly<OrderDto>;

export type OrderPath = Path<OrderDto>;

export type OrderValueAtPath<P extends OrderPath> = PathValue<OrderDto, P>;

export function transformOrderDto(
  input: unknown
): OrderResponseDto {
  return input as OrderResponseDto;
}

export function validateOrderDto(
  dto: OrderCreateDto
): dto is OrderDto {
  return typeof dto === 'object' && dto !== null;
}
