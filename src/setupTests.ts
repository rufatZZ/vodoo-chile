import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { afterAll } from "vitest";

afterAll(() => cleanup());
