import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Container,
  FaContainer,
  FaEye,
  FaInvalidInput,
  FaValidInput,
  Input as InputNode,
  InputAppend,
  InputLabel,
  InputWrapper,
  InvalidLabel,
  ValidLabel,
} from "./styled";

const BulldaxInput = ({
  appendLabel,
  autoComplete,
  className,
  containerStyle,
  disabled,
  inputLabelText,
  invalidLabel,
  isInvalid,
  key,
  name,
  onChange,
  placeholder,
  required,
  type,
  validLabel,
  value,
}) => {
  const [inputType, setInputType] = useState(type || "text");

  // Only use for password input type to toggle input to text
  const togglePasswordType = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  const iconValidationInputs =
    String(value).length <= 0 ? null : isInvalid ? (
      <FaInvalidInput key="FaInvalidInput" aria-hidden="true" />
    ) : (
      <FaValidInput key="FaValidInput" aria-hidden="true" />
    );
  const inputInnerContent =
    name === "code" ? null : type === "password" ? (
      <FaContainer key={`type${name}_${type}`}>
        {iconValidationInputs}
        <FaEye
          key="FaEye"
          inputType={inputType}
          onClick={togglePasswordType}
          aria-hidden="true"
        />
      </FaContainer>
    ) : (
      <FaContainer key={`type${name}_${type}`}>
        {iconValidationInputs}
      </FaContainer>
    );

  return (
    <Container
      containerStyle={containerStyle}
      hasLabel={inputLabelText !== ""}
      invalid={isInvalid}
      value={value}
    >
      {inputLabelText !== "" ? <InputLabel>{inputLabelText}</InputLabel> : null}
      <InputWrapper>
        <InputNode
          autoComplete={autoComplete}
          className={className}
          disabled={disabled}
          invalid={isInvalid}
          hasAppend={appendLabel !== ""}
          key={key}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          type={inputType}
          value={value}
        />{" "}
        {appendLabel !== "" ? (
          <InputAppend disabled={disabled} invalid={isInvalid}>
            {appendLabel}
          </InputAppend>
        ) : null}
      </InputWrapper>
      {String(value).length <= 0
        ? inputInnerContent
        : isInvalid
        ? [
            inputInnerContent,
            invalidLabel ? (
              <InvalidLabel key={`${name}-${invalidLabel}`}>
                {invalidLabel}
              </InvalidLabel>
            ) : null,
          ]
        : !isInvalid
        ? [
            inputInnerContent,
            validLabel ? (
              <ValidLabel key={`${name}-${validLabel}`}>
                {validLabel}
              </ValidLabel>
            ) : null,
          ]
        : inputInnerContent}
    </Container>
  );
};

BulldaxInput.propTypes = {
  appendLabel: PropTypes.string,
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  containerStyle: PropTypes.oneOfType([
    PropTypes.shape([]),
    PropTypes.shape({}),
    PropTypes.node,
  ]),
  disabled: PropTypes.bool,
  inputLabelText: PropTypes.string,
  invalidLabel: PropTypes.node,
  isInvalid: PropTypes.bool,
  key: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  validLabel: PropTypes.node,
  value: PropTypes.string,
};

BulldaxInput.defaultProps = {
  appendLabel: "",
  autoComplete: "on",
  className: "",
  containerStyle: null,
  disabled: false,
  inputLabelText: "",
  invalidLabel: null,
  isInvalid: false,
  key: null,
  name: "",
  onChange: () => {},
  placeholder: "",
  required: false,
  type: "text",
  validLabel: null,
  value: undefined,
};

export default BulldaxInput;
