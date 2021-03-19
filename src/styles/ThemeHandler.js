import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { UiUxContext } from "../context/UiUxContext";

import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";
import { dark, supportedUIthemes } from "./theme";

const ThemeHandler = ({ children }) => {
  const { uiTheme } = useContext(UiUxContext);
  const [theme, setTheme] = useState(dark);

  useEffect(() => {
    if (supportedUIthemes.includes(uiTheme)) {
      setTheme(uiTheme);
    }
  }, [uiTheme]);

  return (
    <ThemeProvider theme={theme === dark ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

ThemeHandler.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.shape([]),
    PropTypes.shape({}),
    PropTypes.node,
  ]),
};

ThemeHandler.defaultProps = {
  children: null,
};

export default ThemeHandler;
