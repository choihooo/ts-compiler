/**
 * Register page component
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
import { useForm, useField } from '@bench/ui';
export type RegisterPageProps = PropsWithChildren<{
  readonly userId?: string;
  readonly data?: DeepReadonly<Record<string, unknown>>;
}>;

export const RegisterPage: FC<RegisterPageProps> = (props: RegisterPageProps) => {
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
            children: 'Register Page',
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

export type RegisterPageData = DeepReadonly<{
  readonly title: string;
  readonly description: string;
  readonly metadata: DeepReadonly<Record<string, unknown>>;
}>;

export function getRegisterPageData(): RegisterPageData {
  return {
    title: 'Register',
    description: 'Register page description',
    metadata: {},
  };
}
