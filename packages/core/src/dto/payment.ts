import type { DeepPartial, DeepReadonly, DeepRequired, DeepNullable } from '../types';
import type { Path, PathValue, NestedKeyOf } from '../types';

/**
 * Payment DTO types
 */

export type PaymentDto = {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly data: DeepReadonly<Record<string, unknown>>;
};

export type PaymentCreateDto = DeepPartial<Omit<PaymentDto, 'id' | 'createdAt' | 'updatedAt'>>;

export type PaymentUpdateDto = DeepPartial<Omit<PaymentDto, 'id' | 'createdAt'>>;

export type PaymentResponseDto = DeepReadonly<PaymentDto>;

export type PaymentPath = Path<PaymentDto>;

export type PaymentValueAtPath<P extends PaymentPath> = PathValue<PaymentDto, P>;

export function transformPaymentDto(
  input: unknown
): PaymentResponseDto {
  return input as PaymentResponseDto;
}

export function validatePaymentDto(
  dto: PaymentCreateDto
): dto is PaymentDto {
  return typeof dto === 'object' && dto !== null;
}
