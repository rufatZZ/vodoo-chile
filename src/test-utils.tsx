import React from "react";
import { render } from "@testing-library/react";

import { FlickrContextProvider } from "context/FlickrContext";
import { SearchContextProvider } from "context/SearchContext";
import { ReactFunctionComponentWithChildren } from "types";

const AllTheProviders: ReactFunctionComponentWithChildren = ({ children }) => (
  <FlickrContextProvider>
    <SearchContextProvider>{children}</SearchContextProvider>
  </FlickrContextProvider>
);

const renderWithWrapper = (component: React.ReactElement) => render(component);

export const renderWithAllProviders = (ui: React.ReactElement) =>
  render(ui, { wrapper: AllTheProviders });

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithWrapper as render };
