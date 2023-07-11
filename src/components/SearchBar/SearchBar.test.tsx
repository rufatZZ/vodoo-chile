import { describe, it, expect } from "vitest";

import { screen, renderWithAllProviders, fireEvent } from "test-utils";

import { SearchBar } from "./SearchBar";

describe("<SearchBar />", () => {
  beforeEach(() => {
    renderWithAllProviders(<SearchBar />);
  });

  it("Should render initial screen properyly", () => {
    const input = screen.getByTestId("search-bar__input");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Search the keyword...");
  });

  it("Should update the value when onChange", () => {
    const input = screen.getByTestId("search-bar__input");

    fireEvent.change(input, { target: { value: "cat" } });

    expect(input).toHaveValue("cat");
  });
});
