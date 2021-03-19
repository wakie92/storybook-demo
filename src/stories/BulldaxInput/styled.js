import styled from "styled-components";

import { colors } from "../../styles/theme";
import { TextSmall } from "../../styles/styledComponents/textStyled";

export const Container = styled.div`
  width: 100%;
  min-height: ${({ hasLabel }) => (hasLabel ? "72px" : "52px")};
  position: relative;
  margin: 7px 0;

  ${({ containerStyle }) => containerStyle}
`;

export const InputWrapper = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
`;

export const InputLabel = styled(TextSmall)`
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Input = styled.input`
  margin: 0 !important;
  height: 100%;
  /* stylelint-disable */

  outline: none;
  transition: border 0.5s ease;
  background: ${({ disabled, theme }) =>
    disabled
      ? theme.colors.bckground.inputDisabled
      : theme.colors.bckground.input};
  border: 1px solid
    ${({ invalid, theme, value }) =>
      String(value).length <= 0
        ? theme.colors.border.regular
        : invalid
        ? colors.redHe01e3c
        : theme.colors.border.regular};
  border-radius: 4px;

  ${({ hasAppend, type }) =>
    hasAppend
      ? `
    width: 85%;
    padding: 11px 0 11px 15px;
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `
      : `
    width: 100%;
    padding: 11px 0 11px 15px;
    padding-right: ${type === "password" ? "4.25rem" : "2.125rem"} !important;
    box-sizing: border-box;
  `}

  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;

  ${({ disabled }) => (disabled ? `cursor: not-allowed;` : "")};
`;

export const ValidLabel = styled.label`
  color: #28a745 !important;
  display: ${({ value }) => (String(value).length > 0 ? "inherit" : "none")};
  margin: 5px 0 0;
  font-size: 12px;

  &:hover,
  &:focus {
    color: #1e7e34 !important;
  }

  ${({ validLabelStyle }) => validLabelStyle};
`;

export const InvalidLabel = styled.label`
  color: #e01e3c !important;
  display: ${({ value }) => (String(value).length > 0 ? "inherit" : "none")};
  margin: 5px 0 0;
  font-size: 12px;

  &:hover,
  &:focus {
    color: #e01e3c !important;
  }
`;

export const FaContainer = styled.div`
  position: absolute;
  height: 30px;
  padding-top: 16px;
  top: 0;
  right: 2%;
  display: flex;
  align-items: center;

  & i {
    display: block;
    font-size: 20px;
  }
`;

export const FaEye = styled.i.attrs(({ inputType }) => ({
  className: `fa fa-eye${
    inputType === "password" ? "-slash" : ""
  } cursor-pointer`,
}))`
  padding-left: 0.5rem;
  color: ${({ theme }) => theme.colors.text.secondary};

  &:hover {
    cursor: pointer;
  }
`;

export const FaValidInput = styled.i.attrs(() => ({
  className: "fa fa-check-circle cursor-pointer",
}))`
  color: ${colors.greenH04e77f};
`;

export const FaInvalidInput = styled.i.attrs(() => ({
  className: "fa fa-exclamation-circle cursor-pointer",
}))`
  color: ${colors.redHe01e3c};
`;

export const InputAppend = styled.div`
  width: 15%;
  height: 100%;
  background: ${({ disabled, theme }) =>
    disabled
      ? theme.colors.bckground.inputDisabled
      : theme.colors.bckground.input};
  padding: 11px 0 11px 15px;

  border: 1px solid
    ${({ invalid, theme, value }) =>
      String(value).length <= 0
        ? theme.colors.border.regular
        : invalid
        ? colors.redHe01e3c
        : theme.colors.border.regular};
  border-left: none;
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  box-sizing: border-box;

  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;
  /* stylelint-enable */
`;
