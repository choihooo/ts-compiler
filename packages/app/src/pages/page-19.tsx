/**
 * Page 19 component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, PropsWithChildren } from '@bench/ui';
import { Container, Stack, Grid, Card, Button, Input, Text } from '@bench/ui';
import { PolymorphicBox, PolymorphicButton, PolymorphicText } from '@bench/ui';
import { VariantButton, VariantCard, VariantText, VariantInput } from '@bench/ui';
import { FormField, FormInput, FormGroup } from '@bench/ui';
import { useForm, useField, useState } from '@bench/ui';
import type { UserDto, ProductDto, OrderDto } from '@bench/core';

export type Page19Props = PropsWithChildren<{
  readonly data?: DeepReadonly<Record<string, unknown>>;
}>;

export const Page19: FC<Page19Props> = (props: Page19Props) => {
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
                children: 'Page 19',
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
            children: 'Page 19 content',
          }),
        }),
      ],
    }),
  });
};
