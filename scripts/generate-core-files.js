#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const coreSrcPath = path.join(__dirname, '../packages/core/src');

// Generate utils files
const utilsFiles = [
  'transform',
  'validation',
  'format',
  'array',
  'object',
  'string',
  'number',
  'date',
  'async',
  'cache',
  'debounce',
  'throttle',
  'memoize',
  'pipe',
  'compose',
];

utilsFiles.forEach((file) => {
  const filePath = path.join(coreSrcPath, 'utils', `${file}.ts`);
  const content = `import type { DeepPartial, DeepReadonly } from '../types';
import type { Path, PathValue } from '../types';

/**
 * ${file.charAt(0).toUpperCase() + file.slice(1)} utility functions
 */

export type ${file.charAt(0).toUpperCase() + file.slice(1)}Options<T = any> = {
  readonly config?: DeepPartial<T>;
  readonly path?: Path<T>;
};

export function ${file}Util<T>(value: T, options?: ${file.charAt(0).toUpperCase() + file.slice(1)}Options<T>): T {
  return value;
}

export type ${file.charAt(0).toUpperCase() + file.slice(1)}Result<T> = {
  readonly value: DeepReadonly<T>;
  readonly transformed: boolean;
};

export function transform${file.charAt(0).toUpperCase() + file.slice(1)}<T>(
  input: T
): ${file.charAt(0).toUpperCase() + file.slice(1)}Result<T> {
  return {
    value: input as DeepReadonly<T>,
    transformed: true,
  };
}
}
`;
  fs.writeFileSync(filePath, content);
});

// Generate API files
const apiFiles = ['types', 'response', 'request', 'client', 'error', 'middleware', 'interceptor', 'adapter'];

apiFiles.forEach((file) => {
  const filePath = path.join(coreSrcPath, 'api', `${file}.ts`);
  const content = `import type { DeepPartial, DeepReadonly, Path, PathValue } from '../types';
import type { IsPromise, PromiseValue } from '../types';

/**
 * API ${file} types and utilities
 */

export type Api${file.charAt(0).toUpperCase() + file.slice(1)}Config = {
  readonly baseUrl?: string;
  readonly timeout?: number;
  readonly headers?: DeepReadonly<Record<string, string>>;
};

export type Api${file.charAt(0).toUpperCase() + file.slice(1)}Options<T = any> = {
  readonly config?: DeepPartial<Api${file.charAt(0).toUpperCase() + file.slice(1)}Config>;
  readonly path?: Path<T>;
};

export type Api${file.charAt(0).toUpperCase() + file.slice(1)}Response<T> = {
  readonly data: DeepReadonly<T>;
  readonly status: number;
  readonly headers: DeepReadonly<Record<string, string>>;
};

export async function createApi${file.charAt(0).toUpperCase() + file.slice(1)}<T>(
  config?: Api${file.charAt(0).toUpperCase() + file.slice(1)}Config
): Promise<Api${file.charAt(0).toUpperCase() + file.slice(1)}Response<T>> {
  return {
    data: {} as DeepReadonly<T>,
    status: 200,
    headers: {},
  };
}
`;
  fs.writeFileSync(filePath, content);
});

// Generate DTO files
const dtoFiles = ['user', 'product', 'order', 'cart', 'payment', 'shipping', 'review', 'category', 'tag', 'image'];

dtoFiles.forEach((file) => {
  const filePath = path.join(coreSrcPath, 'dto', `${file}.ts`);
  const content = `import type { DeepPartial, DeepReadonly, DeepRequired, DeepNullable } from '../types';
import type { Path, PathValue, NestedKeyOf } from '../types';

/**
 * ${file.charAt(0).toUpperCase() + file.slice(1)} DTO types
 */

export type ${file.charAt(0).toUpperCase() + file.slice(1)}Dto = {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly data: DeepReadonly<Record<string, unknown>>;
};

export type ${file.charAt(0).toUpperCase() + file.slice(1)}CreateDto = DeepPartial<Omit<${file.charAt(0).toUpperCase() + file.slice(1)}Dto, 'id' | 'createdAt' | 'updatedAt'>>;

export type ${file.charAt(0).toUpperCase() + file.slice(1)}UpdateDto = DeepPartial<Omit<${file.charAt(0).toUpperCase() + file.slice(1)}Dto, 'id' | 'createdAt'>>;

export type ${file.charAt(0).toUpperCase() + file.slice(1)}ResponseDto = DeepReadonly<${file.charAt(0).toUpperCase() + file.slice(1)}Dto>;

export type ${file.charAt(0).toUpperCase() + file.slice(1)}Path = Path<${file.charAt(0).toUpperCase() + file.slice(1)}Dto>;

export type ${file.charAt(0).toUpperCase() + file.slice(1)}ValueAtPath<P extends ${file.charAt(0).toUpperCase() + file.slice(1)}Path> = PathValue<${file.charAt(0).toUpperCase() + file.slice(1)}Dto, P>;

export function transform${file.charAt(0).toUpperCase() + file.slice(1)}Dto(
  input: unknown
): ${file.charAt(0).toUpperCase() + file.slice(1)}ResponseDto {
  return input as ${file.charAt(0).toUpperCase() + file.slice(1)}ResponseDto;
}

export function validate${file.charAt(0).toUpperCase() + file.slice(1)}Dto(
  dto: ${file.charAt(0).toUpperCase() + file.slice(1)}CreateDto
): dto is ${file.charAt(0).toUpperCase() + file.slice(1)}Dto {
  return typeof dto === 'object' && dto !== null;
}
`;
  fs.writeFileSync(filePath, content);
});

// Generate additional type utility files (50+ files)
for (let i = 1; i <= 50; i++) {
  const filePath = path.join(coreSrcPath, 'types', `utility-${i}.ts`);
  const content = `import type { DeepPartial, DeepReadonly, Path, PathValue } from './index';
import type { IsPromise, IsArray, IsObject } from './conditional';

/**
 * Additional utility type ${i}
 */

export type Utility${i}Base<T> = {
  readonly value: DeepReadonly<T>;
  readonly path?: Path<T>;
};

export type Utility${i}Options<T = any> = DeepPartial<Utility${i}Base<T>>;

export type Utility${i}Result<T> = IsPromise<T> extends true
  ? Promise<DeepReadonly<PromiseValue<T>>>
  : DeepReadonly<T>;

export type Utility${i}Transform<T, U = T> = {
  readonly input: DeepReadonly<T>;
  readonly output: DeepReadonly<U>;
  readonly transformed: boolean;
};

export function utility${i}<T>(value: T): Utility${i}Result<T> {
  return value as Utility${i}Result<T>;
}

export function transformUtility${i}<T, U = T>(
  input: T,
  transform?: (value: DeepReadonly<T>) => U
): Utility${i}Transform<T, U> {
  return {
    input: input as DeepReadonly<T>,
    output: transform ? transform(input as DeepReadonly<T>) : (input as U),
    transformed: transform !== undefined,
  };
}
`;
  fs.writeFileSync(filePath, content);
}

// Update types/index.ts to export all utility files
const typesIndexPath = path.join(coreSrcPath, 'types', 'index.ts');
let typesIndexContent = fs.readFileSync(typesIndexPath, 'utf-8');
for (let i = 1; i <= 50; i++) {
  typesIndexContent += `\nexport * from './utility-${i}';`;
}
fs.writeFileSync(typesIndexPath, typesIndexContent);

console.log('Generated core files successfully!');
