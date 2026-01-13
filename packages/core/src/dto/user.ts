import type { DeepPartial, DeepReadonly, DeepRequired, DeepNullable } from '../types';
import type { Path, PathValue, NestedKeyOf } from '../types';

/**
 * User DTO types
 */

export type UserDto = {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly data: DeepReadonly<Record<string, unknown>>;
};

export type UserCreateDto = DeepPartial<Omit<UserDto, 'id' | 'createdAt' | 'updatedAt'>>;

export type UserUpdateDto = DeepPartial<Omit<UserDto, 'id' | 'createdAt'>>;

export type UserResponseDto = DeepReadonly<UserDto>;

export type UserPath = Path<UserDto>;

export type UserValueAtPath<P extends UserPath> = PathValue<UserDto, P>;

export function transformUserDto(
  input: unknown
): UserResponseDto {
  return input as UserResponseDto;
}

export function validateUserDto(
  dto: UserCreateDto
): dto is UserDto {
  return typeof dto === 'object' && dto !== null;
}
