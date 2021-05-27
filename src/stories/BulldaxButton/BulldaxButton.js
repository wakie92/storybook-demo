import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';

import { StyledButton, InnerDiv } from './styled';

const BulldaxButton = ({
  buttonStyle,
  children,
  disabled,
  fullWidth,
  innerStyle,
  isLoading,
  onClick,
  size,
  spinnerSize,
  spinnerType,
  theme,
  type,
}) => {
  return (
    <StyledButton
      disabled={isLoading || disabled}
      buttonStyle={buttonStyle}
      fullWidth={fullWidth}
      size={size}
      isLoading={isLoading}
      onClick={disabled === true ? () => {} : onClick}
      theme={theme}
      type={type}
    >
      <InnerDiv innerStyle={innerStyle}>
        {isLoading ? <Spinner type={spinnerType} size={spinnerSize} /> : children}
      </InnerDiv>
    </StyledButton>
  );
};

BulldaxButton.propTypes = {
  buttonStyle: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  innerStyle: PropTypes.shape([]),
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
  spinnerSize: PropTypes.string,
  spinnerType: PropTypes.string,
  theme: PropTypes.string,
  type: PropTypes.string,
};

BulldaxButton.defaultProps = {
  buttonStyle: null,
  children: null,
  disabled: false,
  fullWidth: true,
  innerStyle: null,
  isLoading: false,
  onClick: () => {},
  size: '',
  spinnerSize: 'sm',
  spinnerType: 'border',
  theme: '',
  type: 'button',
};

export default BulldaxButton;
