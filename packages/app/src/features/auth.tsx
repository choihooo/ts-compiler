/**
 * Auth feature component
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
  PolymorphicContainer,
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
export type AuthFeatureProps = PropsWithChildren<{
  readonly authId?: string;
  readonly data?: DeepReadonly<Record<string, unknown>>;
  readonly onUpdate?: (data: DeepReadonly<Record<string, unknown>>) => void;
}>;

export const AuthFeature: FC<AuthFeatureProps> = (props: AuthFeatureProps) => {
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
                children: 'Auth Feature',
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
                onClick: handleClick as () => void,
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

export type AuthFeatureData = DeepReadonly<{
  readonly id: string;
  readonly name: string;
  readonly config: DeepReadonly<Record<string, unknown>>;
}>;

export function getAuthFeatureData(): AuthFeatureData {
  return {
    id: 'auth-1',
    name: 'Auth',
    config: {},
  };
}

export function transformAuthFeatureData(
  input: DeepPartial<AuthFeatureData>
): AuthFeatureData {
  return {
    id: input.id || '',
    name: input.name || '',
    config: input.config || {},
  } as AuthFeatureData;
}
