import { PropsWithChildren } from "react";

export type ReactFunctionComponentWithChildren<T = Record<string, unknown>> =
  React.FC<PropsWithChildren<T>>;
