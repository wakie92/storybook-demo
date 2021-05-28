/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';

import { StyledButton, InnerDiv } from './styled';

const Button = ({
  buttonStyle,
  children,
  disabled,
  innerStyle,
  isLoading,
  onClick,
  size,
  spinnerColor,
  spinnerSize,
  spinnerType,
  theme,
  type,
  marginSide,
  width,
  height,
}) => (
  <StyledButton
    disabled={isLoading || disabled}
    buttonStyle={buttonStyle}
    size={size}
    isLoading={isLoading}
    onClick={disabled === true ? () => {} : onClick}
    theme={theme}
    type={type}
    marginSide={marginSide}
    width={width}
    height={height}
  >
    <InnerDiv innerStyle={innerStyle}>
      {isLoading ? (
        <Spinner type={spinnerType} color={spinnerColor} size={spinnerSize} />
      ) : (
        children
      )}
    </InnerDiv>
  </StyledButton>
);

Button.propTypes = {
  buttonStyle: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
  disabled: PropTypes.bool,
  innerStyle: PropTypes.string,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
  spinnerColor: PropTypes.string,
  spinnerSize: PropTypes.string,
  spinnerType: PropTypes.string,
  theme: PropTypes.string,
  type: PropTypes.string,
  marginSide: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Button.defaultProps = {
  marginSide: '',
  buttonStyle: [''],
  children: null,
  disabled: false,
  innerStyle: '',
  isLoading: false,
  onClick: () => {},
  size: '',
  spinnerColor: 'danger',
  spinnerSize: 'sm',
  spinnerType: 'border',
  theme: '',
  type: 'button',
  width: '',
  height: 'sm',
};

export default Button;
