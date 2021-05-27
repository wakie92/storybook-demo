import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { CheckContainer, CheckBox, CheckBoxLabel } from './styled';

const OrgCheckBox = ({
  checkBoxStyle,
  containerStyle,
  checkedDefault,
  children,
  disabled,
  handleClick,
  id,
  isRound,
  labelStyle,
}) => {
  const [isChecked, setIsChecked] = useState(checkedDefault);

  const toggleCheckBox = () => {
    if (disabled) return;

    setIsChecked(!isChecked);
    handleClick(!isChecked, id);
  };

  useEffect(() => setIsChecked(checkedDefault), [checkedDefault]);

  return (
    <CheckContainer
      containerStyle={containerStyle}
      disabled={disabled}
      id={id}
      onClick={() => toggleCheckBox()}
    >
      <CheckBox
        checkBoxStyle={checkBoxStyle}
        isChecked={isChecked}
        disabled={disabled}
        isRound={isRound}
      >
        <i className="fas fa-check" aria-hidden="true" />
      </CheckBox>
      <CheckBoxLabel labelStyle={labelStyle}>{children}</CheckBoxLabel>
    </CheckContainer>
  );
};

OrgCheckBox.defaultProps = {
  checkBoxStyle: null,
  checkedDefault: false,
  children: null,
  containerStyle: null,
  disabled: false,
  handleClick: () => {},
  isRound: false,
  labelStyle: null,
};

OrgCheckBox.propTypes = {
  checkBoxStyle: PropTypes.oneOfType([PropTypes.shape([]), PropTypes.shape({}), PropTypes.node]),
  checkedDefault: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.shape([]), PropTypes.shape({}), PropTypes.node]),
  containerStyle: PropTypes.oneOfType([PropTypes.shape([]), PropTypes.shape({}), PropTypes.node]),
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  id: PropTypes.string.isRequired,
  isRound: PropTypes.bool,
  labelStyle: PropTypes.oneOfType([PropTypes.shape([]), PropTypes.shape({}), PropTypes.node]),
};

export default OrgCheckBox;
