import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import ThemeHandler from "../src/styles/ThemeHandler";
import UiUxContextProvider from "../src/context/UiUxContext";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <UiUxContextProvider>
      <ThemeHandler>
        <Story />
      </ThemeHandler>
    </UiUxContextProvider>
  ),
];
