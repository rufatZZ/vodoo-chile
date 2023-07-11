import { describe, it, expect } from "vitest";

import { renderWithAllProviders, screen } from "test-utils";

import App from "./App";

describe("<App />", () => {
  it("Should render initial screen properyly", () => {
    renderWithAllProviders(<App />);

    const pageTitle = "Flickr Image Portal";
    const noData = "Looks like there aren’t any matches for your search";

    expect(screen.getByText(pageTitle)).toBeInTheDocument();
    expect(screen.getByText(noData)).toBeInTheDocument();
  });
});
