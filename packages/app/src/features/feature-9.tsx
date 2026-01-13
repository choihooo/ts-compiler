/**
 * Feature 9 component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, PropsWithChildren } from '@bench/ui';
import { Container, Stack, Card, Button, Text } from '@bench/ui';
import { PolymorphicBox, PolymorphicButton } from '@bench/ui';
import { VariantButton, VariantCard, VariantText } from '@bench/ui';
import { useForm, useState } from '@bench/ui';
import type { UserDto, ProductDto } from '@bench/core';

export type Feature9Props = PropsWithChildren<{
  readonly data?: DeepReadonly<Record<string, unknown>>;
}>;

export const Feature9: FC<Feature9Props> = (props: Feature9Props) => {
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
            children: 'Feature 9',
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
