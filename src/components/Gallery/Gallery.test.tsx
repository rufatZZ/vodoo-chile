import { describe, it, expect } from "vitest";

import { renderWithAllProviders } from "test-utils";

import { Gallery } from "./Gallery";

describe("<Gallery />", () => {
  beforeEach(() => {
    renderWithAllProviders(<Gallery />);
  });

  it("Should render initial screen properyly", () => {
    expect(true).toBeFalsy();
  });

  it("Should have content as {content} if still has pages to load", () => {
    expect(true).toBeFalsy();
  });

  it("Should have content as {content} if state is loading", () => {
    expect(true).toBeFalsy();
  });

  it("Should have content as {content} if state is last page", () => {
    expect(true).toBeFalsy();
  });

  it("Should render images if fetching is successful", () => {
    expect(true).toBeFalsy();
  });

  it("Should call given method to fetch more if end of content is reached ", () => {
    expect(true).toBeFalsy();
  });
});
