import React, { createContext, Component } from "react";
import PropTypes from "prop-types";

import { dark, supportedUIthemes } from "../styles/theme";

export const UiUxContext = createContext();

class UiUxContextProvider extends Component {
  constructor(props) {
    super(props);

    this.updateUiTheme = this.updateUiTheme.bind(this);

    this.state = {
      devicePixelRatio: 1,
      heightScreen: 1080,
      isMobile: false,
      previousUrl: "",
      uiTheme: dark,
      widthScreen: 1920,
    };
  }

  updateUiTheme(newTheme) {
    const self = this;

    if (supportedUIthemes.includes(newTheme)) {
      self.setState({ uiTheme: newTheme });
    }
  }

  render() {
    const { children } = this.props;
    return (
      <UiUxContext.Provider
        value={{
          ...this.state,
          updateUiTheme: this.updateUiTheme,
        }}
      >
        {children}
      </UiUxContext.Provider>
    );
  }
}

UiUxContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

UiUxContextProvider.defaultProps = {
  children: null,
};

export default UiUxContextProvider;
