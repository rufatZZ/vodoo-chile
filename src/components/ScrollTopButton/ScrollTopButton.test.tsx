import { describe, it, expect } from "vitest";

import { screen, render } from "test-utils";

import { ScrollTopButton } from "./ScrollTopButton";

describe("<ScrollTopButton />", () => {
  beforeEach(() => {
    render(<ScrollTopButton />);
  });

  it("Should render initial screen as empty", () => {
    expect(screen.queryByTestId("scroll-top--btn")).toBeNull();
  });

  it("Should render button when scroll position is sufficient", () => {
    expect(true).toBeFalsy();
  });

  it("Should go back to top when onClick have been called", () => {
    expect(true).toBeFalsy();
  });
});
