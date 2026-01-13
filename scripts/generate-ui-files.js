#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const uiSrcPath = path.join(__dirname, '../packages/ui/src');

// Generate additional component files (30+ files)
const componentNames = [
  'Avatar',
  'Badge',
  'Banner',
  'Breadcrumb',
  'Dialog',
  'Dropdown',
  'Icon',
  'Image',
  'Link',
  'List',
  'Menu',
  'Modal',
  'Navbar',
  'Pagination',
  'Popover',
  'Progress',
  'Radio',
  'Select',
  'Sidebar',
  'Slider',
  'Spinner',
  'Switch',
  'Table',
  'Tabs',
  'Tag',
  'Toast',
  'Tooltip',
  'Tree',
  'Upload',
  'Wizard',
];

componentNames.forEach((name) => {
  const filePath = path.join(uiSrcPath, 'components', `${name.toLowerCase()}.tsx`);
  const content = `/**
 * ${name} component
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { FC, ComponentType, ComponentProps, PropsWithChildren, Ref } from '../types/react';
import type { PolymorphicComponentProps, AsProp } from '../types/component';
import type { StyledProps, InteractiveProps, AccessibleProps } from '../types/props';

export type ${name}Props = StyledProps<
  AccessibleProps<
    InteractiveProps<
      PropsWithChildren<{
        readonly variant?: 'default' | 'primary' | 'secondary';
        readonly size?: 'small' | 'medium' | 'large';
        readonly disabled?: boolean;
      }>
    >
  >
>;

export const ${name}: FC<${name}Props> = (props) => {
  return { type: 'div', props };
};

export type Polymorphic${name}Props<C extends ComponentType<any> = ComponentType<any>> =
  PolymorphicComponentProps<C, ${name}Props & AsProp<C>>;

export function Polymorphic${name}<C extends ComponentType<any> = ComponentType<any>>(
  props: Polymorphic${name}Props<C>
): { type: C; props: Polymorphic${name}Props<C> } {
  return { type: (props.as as C) || ('div' as any), props };
}
`;
  fs.writeFileSync(filePath, content);
});

// Update components/index.ts
const componentsIndexPath = path.join(uiSrcPath, 'components', 'index.ts');
let componentsIndexContent = fs.readFileSync(componentsIndexPath, 'utf-8');
componentNames.forEach((name) => {
  componentsIndexContent += `\nexport * from './${name.toLowerCase()}';`;
});
fs.writeFileSync(componentsIndexPath, componentsIndexContent);

// Generate additional hook files (20+ files)
const hookNames = [
  'async',
  'debounce',
  'throttle',
  'localStorage',
  'sessionStorage',
  'media',
  'intersection',
  'resize',
  'scroll',
  'clickOutside',
  'keyboard',
  'focus',
  'hover',
  'drag',
  'drop',
  'visibility',
  'online',
  'geolocation',
  'permission',
  'clipboard',
];

hookNames.forEach((name) => {
  const filePath = path.join(uiSrcPath, 'hooks', `${name}.ts`);
  const hookName = name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, '$1');
  const content = `/**
 * ${hookName} hook
 */

import type { DeepPartial, DeepReadonly, Path, PathValue } from '@bench/core';
import type { UseStateResult, UseEffectResult } from './state';

export type Use${hookName}Result<T = any> = {
  readonly value: DeepReadonly<T>;
  readonly setValue: (value: DeepPartial<T> | ((prev: T) => DeepPartial<T>)) => void;
  readonly reset: () => void;
};

export function use${hookName}<T = any>(initialValue: T): Use${hookName}Result<T> {
  return {
    value: initialValue as DeepReadonly<T>,
    setValue: () => {},
    reset: () => {},
  };
}

export type Use${hookName}Options = {
  readonly enabled?: boolean;
  readonly onUpdate?: (value: any) => void;
};

export function use${hookName}WithOptions<T = any>(
  initialValue: T,
  options?: Use${hookName}Options
): Use${hookName}Result<T> {
  return {
    value: initialValue as DeepReadonly<T>,
    setValue: () => {},
    reset: () => {},
  };
}
`;
  fs.writeFileSync(filePath, content);
});

// Update hooks/index.ts
const hooksIndexPath = path.join(uiSrcPath, 'hooks', 'index.ts');
let hooksIndexContent = fs.readFileSync(hooksIndexPath, 'utf-8');
hookNames.forEach((name) => {
  hooksIndexContent += `\nexport * from './${name}';`;
});
fs.writeFileSync(hooksIndexPath, hooksIndexContent);

console.log('Generated UI files successfully!');
