/**
 * Main app component
 */

import type { DeepReadonly } from "@bench/core";
import type { FC, PropsWithChildren } from "@bench/ui";
import { Container, Stack } from "@bench/ui";

export type AppProps = PropsWithChildren<{
  readonly theme?: "light" | "dark";
  readonly locale?: string;
}>;

export const App: FC<AppProps> = (props: AppProps) => {
  return Container({
    children: Stack({
      children: props.children,
      direction: "column",
      spacing: 16,
    }),
  });
};
