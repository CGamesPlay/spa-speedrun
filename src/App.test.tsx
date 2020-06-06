import renderer from "react-test-renderer";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import App from "./App";

describe("<App />", () => {
  test("renders without exploding", () => {
    expect(() => {
      renderer.create(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
    }).not.toThrow();
  });
});
