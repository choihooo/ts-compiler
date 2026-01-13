#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const appSrcPath = path.join(__dirname, '../packages/app/src');

// Generate page files
const pageNames = [
  'home',
  'dashboard',
  'profile',
  'settings',
  'products',
  'orders',
  'cart',
  'checkout',
  'login',
  'register',
];

pageNames.forEach((name) => {
  const filePath = path.join(appSrcPath, 'pages', `${name}.tsx`);
  const pageName = name.charAt(0).toUpperCase() + name.slice(1);
  const content = `/**
 * ${pageName} page component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type {
  FC,
  ComponentType,
  ComponentProps,
  PropsWithChildren,
} from '@bench/ui';
import {
  Container,
  Box,
  Stack,
  Grid,
  Card,
  Button,
  Input,
  Text,
} from '@bench/ui';
import {
  PolymorphicBox,
  PolymorphicButton,
  PolymorphicText,
} from '@bench/ui';
import {
  VariantButton,
  VariantCard,
  VariantText,
  VariantInput,
  VariantBadge,
  VariantAlert,
} from '@bench/ui';
import {
  FormField,
  FormInput,
  FormTextarea,
  FormSelect,
  FormCheckbox,
  FormRadio,
  FormGroup,
  FormLabel,
  FormError,
  FormHelperText,
} from '@bench/ui';
import { useForm, useField } from '@bench/ui';
import type {
  UserDto,
  ProductDto,
  OrderDto,
  CartDto,
  PaymentDto,
  ShippingDto,
} from '@bench/core';
import type {
  DeepPartial,
  DeepReadonly,
  Path,
  PathValue,
  RequireAtLeastOne,
} from '@bench/core';

export type ${pageName}PageProps = PropsWithChildren<{
  readonly userId?: string;
  readonly data?: DeepReadonly<Record<string, unknown>>;
}>;

export const ${pageName}Page: FC<${pageName}PageProps> = (props) => {
  const form = useForm<{ readonly search: string; readonly filter: string }>({
    search: '',
    filter: '',
  });

  const searchField = useField<string>('search', form);
  const filterField = useField<string>('filter', form);

  return Container({
    children: Stack({
      direction: 'column',
      spacing: 24,
      children: [
        Box({
          padding: '16px',
          children: VariantText({
            variant: 'heading',
            size: 'lg',
            children: '${pageName} Page',
          }),
        }),
        Grid({
          columns: 3,
          gap: 16,
          children: [
            VariantCard({
              variant: 'elevated',
              size: 'medium',
              children: Stack({
                direction: 'column',
                spacing: 12,
                children: [
                  VariantText({
                    variant: 'heading',
                    size: 'md',
                    children: 'Card Title',
                  }),
                  VariantText({
                    variant: 'body',
                    size: 'sm',
                    children: 'Card content goes here',
                  }),
                  VariantButton({
                    variant: 'primary',
                    size: 'medium',
                    children: 'Action',
                  }),
                ],
              }),
            }),
            VariantCard({
              variant: 'outlined',
              size: 'medium',
              children: FormGroup({
                direction: 'column',
                spacing: 8,
                children: [
                  FormField({
                    label: 'Search',
                    children: FormInput({
                      ...searchField,
                      placeholder: 'Enter search term',
                    }),
                  }),
                  FormField({
                    label: 'Filter',
                    children: FormSelect({
                      ...filterField,
                      options: [
                        { value: 'all', label: 'All' },
                        { value: 'active', label: 'Active' },
                        { value: 'inactive', label: 'Inactive' },
                      ],
                    }),
                  }),
                ],
              }),
            }),
            VariantCard({
              variant: 'filled',
              size: 'medium',
              children: Stack({
                direction: 'column',
                spacing: 8,
                children: [
                  VariantBadge({
                    variant: 'primary',
                    size: 'medium',
                    children: 'Badge',
                  }),
                  VariantAlert({
                    variant: 'info',
                    severity: 'low',
                    children: 'Alert message',
                  }),
                ],
              }),
            }),
          ],
        }),
        PolymorphicBox({
          as: 'section',
          children: PolymorphicStack({
            as: 'div',
            direction: 'row',
            spacing: 16,
            children: [
              PolymorphicButton({
                as: 'button',
                disabled: false,
                children: 'Polymorphic Button',
              }),
              PolymorphicText({
                as: 'p',
                variant: 'body',
                size: 'md',
                children: 'Polymorphic Text',
              }),
            ],
          }),
        }),
      ],
    }),
  });
};

export type ${pageName}PageData = DeepReadonly<{
  readonly title: string;
  readonly description: string;
  readonly metadata: DeepReadonly<Record<string, unknown>>;
}>;

export function get${pageName}PageData(): ${pageName}PageData {
  return {
    title: '${pageName}',
    description: '${pageName} page description',
    metadata: {},
  };
}
`;
  fs.writeFileSync(filePath, content);
});

// Generate feature files
const featureNames = [
  'auth',
  'cart',
  'checkout',
  'product',
  'order',
  'user',
  'payment',
  'shipping',
];

featureNames.forEach((name) => {
  const filePath = path.join(appSrcPath, 'features', `${name}.tsx`);
  const featureName = name.charAt(0).toUpperCase() + name.slice(1);
  const content = `/**
 * ${featureName} feature component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type {
  FC,
  ComponentType,
  ComponentProps,
  PropsWithChildren,
} from '@bench/ui';
import {
  Container,
  Box,
  Stack,
  Grid,
  Card,
  Button,
  Input,
  Text,
} from '@bench/ui';
import {
  PolymorphicBox,
  PolymorphicButton,
  PolymorphicText,
  PolymorphicContainer,
  PolymorphicStack,
} from '@bench/ui';
import {
  VariantButton,
  VariantCard,
  VariantText,
  VariantInput,
  VariantBadge,
  VariantAlert,
} from '@bench/ui';
import {
  FormField,
  FormInput,
  FormTextarea,
  FormSelect,
  FormCheckbox,
  FormRadio,
  FormGroup,
  FormLabel,
  FormError,
  FormHelperText,
} from '@bench/ui';
import { useForm, useField, useState, useMemo, useCallback } from '@bench/ui';
import type {
  UserDto,
  ProductDto,
  OrderDto,
  CartDto,
  PaymentDto,
  ShippingDto,
  UserCreateDto,
  UserUpdateDto,
  ProductCreateDto,
  ProductUpdateDto,
  OrderCreateDto,
  OrderUpdateDto,
} from '@bench/core';
import type {
  DeepPartial,
  DeepReadonly,
  Path,
  PathValue,
  RequireAtLeastOne,
  RequireExactlyOne,
} from '@bench/core';

export type ${featureName}FeatureProps = PropsWithChildren<{
  readonly ${name}Id?: string;
  readonly data?: DeepReadonly<Record<string, unknown>>;
  readonly onUpdate?: (data: DeepReadonly<Record<string, unknown>>) => void;
}>;

export const ${featureName}Feature: FC<${featureName}FeatureProps> = (props) => {
  const [state, setState] = useState<DeepReadonly<{ readonly value: string }>>({
    value: '',
  });

  const form = useForm<{ readonly field1: string; readonly field2: string }>({
    field1: '',
    field2: '',
  });

  const field1 = useField<string>('field1', form);
  const field2 = useField<string>('field2', form);

  const memoizedValue = useMemo(() => {
    return { computed: state.value };
  }, [state.value]);

  const handleClick = useCallback(() => {
    setState({ value: 'updated' });
  }, []);

  return Container({
    children: Stack({
      direction: 'column',
      spacing: 16,
      children: [
        VariantCard({
          variant: 'elevated',
          size: 'large',
          children: Stack({
            direction: 'column',
            spacing: 12,
            children: [
              VariantText({
                variant: 'heading',
                size: 'lg',
                children: '${featureName} Feature',
              }),
              VariantText({
                variant: 'body',
                size: 'md',
                children: 'Feature description',
              }),
              FormGroup({
                direction: 'column',
                spacing: 8,
                children: [
                  FormField({
                    label: 'Field 1',
                    children: FormInput({
                      ...field1,
                      placeholder: 'Enter value',
                    }),
                  }),
                  FormField({
                    label: 'Field 2',
                    children: FormTextarea({
                      ...field2,
                      placeholder: 'Enter description',
                      rows: 4,
                    }),
                  }),
                ],
              }),
              VariantButton({
                variant: 'primary',
                size: 'large',
                onClick: handleClick,
                children: 'Submit',
              }),
            ],
          }),
        }),
        Grid({
          columns: 2,
          gap: 12,
          children: [
            PolymorphicBox({
              as: 'div',
              children: PolymorphicText({
                as: 'p',
                variant: 'body',
                size: 'sm',
                children: 'Polymorphic content 1',
              }),
            }),
            PolymorphicBox({
              as: 'section',
              children: PolymorphicButton({
                as: 'button',
                disabled: false,
                children: 'Polymorphic action',
              }),
            }),
          ],
        }),
        VariantAlert({
          variant: 'info',
          severity: 'medium',
          children: 'Feature alert message',
        }),
      ],
    }),
  });
};

export type ${featureName}FeatureData = DeepReadonly<{
  readonly id: string;
  readonly name: string;
  readonly config: DeepReadonly<Record<string, unknown>>;
}>;

export function get${featureName}FeatureData(): ${featureName}FeatureData {
  return {
    id: '${name}-1',
    name: '${featureName}',
    config: {},
  };
}

export function transform${featureName}FeatureData(
  input: DeepPartial<${featureName}FeatureData>
): ${featureName}FeatureData {
  return {
    id: input.id || '',
    name: input.name || '',
    config: input.config || {},
  } as ${featureName}FeatureData;
}
`;
  fs.writeFileSync(filePath, content);
});

// Generate additional page files (20+ more)
for (let i = 1; i <= 20; i++) {
  const filePath = path.join(appSrcPath, 'pages', `page-${i}.tsx`);
  const content = `/**
 * Page ${i} component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, PropsWithChildren } from '@bench/ui';
import { Container, Stack, Grid, Card, Button, Input, Text } from '@bench/ui';
import { PolymorphicBox, PolymorphicButton, PolymorphicText } from '@bench/ui';
import { VariantButton, VariantCard, VariantText, VariantInput } from '@bench/ui';
import { FormField, FormInput, FormGroup } from '@bench/ui';
import { useForm, useField, useState } from '@bench/ui';
import type { UserDto, ProductDto, OrderDto } from '@bench/core';

export type Page${i}Props = PropsWithChildren<{
  readonly data?: DeepReadonly<Record<string, unknown>>;
}>;

export const Page${i}: FC<Page${i}Props> = (props) => {
  const form = useForm<{ readonly field: string }>({ field: '' });
  const field = useField<string>('field', form);
  const [state, setState] = useState<DeepReadonly<{ readonly value: string }>>({
    value: '',
  });

  return Container({
    children: Stack({
      direction: 'column',
      spacing: 16,
      children: [
        VariantCard({
          variant: 'elevated',
          children: Stack({
            direction: 'column',
            spacing: 8,
            children: [
              VariantText({
                variant: 'heading',
                size: 'md',
                children: 'Page ${i}',
              }),
              FormField({
                label: 'Input',
                children: FormInput({
                  ...field,
                  placeholder: 'Enter value',
                }),
              }),
              VariantButton({
                variant: 'primary',
                size: 'medium',
                children: 'Submit',
              }),
            ],
          }),
        }),
        PolymorphicBox({
          as: 'div',
          children: PolymorphicText({
            as: 'p',
            variant: 'body',
            size: 'sm',
            children: 'Page ${i} content',
          }),
        }),
      ],
    }),
  });
};
`;
  fs.writeFileSync(filePath, content);
}

// Update pages/index.ts
const pagesIndexPath = path.join(appSrcPath, 'pages', 'index.ts');
let pagesIndexContent = fs.readFileSync(pagesIndexPath, 'utf-8');
for (let i = 1; i <= 20; i++) {
  pagesIndexContent += `\nexport * from './page-${i}';`;
}
fs.writeFileSync(pagesIndexPath, pagesIndexContent);

// Generate additional feature files (15+ more)
for (let i = 1; i <= 15; i++) {
  const filePath = path.join(appSrcPath, 'features', `feature-${i}.tsx`);
  const content = `/**
 * Feature ${i} component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, PropsWithChildren } from '@bench/ui';
import { Container, Stack, Card, Button, Text } from '@bench/ui';
import { PolymorphicBox, PolymorphicButton } from '@bench/ui';
import { VariantButton, VariantCard, VariantText } from '@bench/ui';
import { useForm, useState } from '@bench/ui';
import type { UserDto, ProductDto } from '@bench/core';

export type Feature${i}Props = PropsWithChildren<{
  readonly data?: DeepReadonly<Record<string, unknown>>;
}>;

export const Feature${i}: FC<Feature${i}Props> = (props) => {
  const form = useForm<{ readonly field: string }>({ field: '' });
  const [state, setState] = useState<DeepReadonly<{ readonly value: string }>>({
    value: '',
  });

  return Container({
    children: Stack({
      direction: 'column',
      spacing: 12,
      children: [
        VariantCard({
          variant: 'outlined',
          children: VariantText({
            variant: 'heading',
            size: 'md',
            children: 'Feature ${i}',
          }),
        }),
        PolymorphicBox({
          as: 'div',
          children: PolymorphicButton({
            as: 'button',
            disabled: false,
            children: 'Action',
          }),
        }),
      ],
    }),
  });
};
`;
  fs.writeFileSync(filePath, content);
}

// Update features/index.ts
const featuresIndexPath = path.join(appSrcPath, 'features', 'index.ts');
let featuresIndexContent = fs.readFileSync(featuresIndexPath, 'utf-8');
for (let i = 1; i <= 15; i++) {
  featuresIndexContent += `\nexport * from './feature-${i}';`;
}
fs.writeFileSync(featuresIndexPath, featuresIndexContent);

console.log('Generated app files successfully!');
