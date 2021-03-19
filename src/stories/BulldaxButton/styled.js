import styled, { css } from "styled-components";

import { colors } from "../../styles/theme";

const fontSize = (props) => {
  switch (props.size) {
    case "sm":
      return css`
        font-size: 12px;
      `;
    case "md":
      return css`
        font-size: 13px;
      `;
    case "lg":
      return css`
        font-size: 14px;
      `;
    case "xl":
      return css`
        font-size: 16px;
      `;
    default:
      return css`
        font-size: 15px;
      `;
  }
};

const height = (props) => {
  switch (props.size) {
    case "sm":
      return css`
        min-height: 2.25rem;
      `;
    case "md":
      return css`
        min-height: 2.5rem;
      `;
    case "lg":
      return css`
        min-height: 2.75rem;
      `;
    case "xl":
      return css`
        min-height: 3rem;
      `;
    default:
      return css`
        min-height: 2.5rem;
      `;
  }
};

const fullWidth = (props) => (props.fullWidth ? { width: "100%" } : null);

const defaultStyle = (props) => {
  switch (props.theme) {
    case "black":
      return css`
        text-decoration: none;
        background-color: ${props.disabled
          ? colors.greyH9c9c9c
          : colors.blackH212121};
        color: ${props.disabled ? colors.greyHd3d3d3 : colors.redHe00c2d};
        transition: 0.2s;
        border: none;

        path {
          fill: rgb(255, 255, 255);
        }
      `;
    case "black-outline":
      return css`
        text-decoration: none;
        background-color: transparent;
        border: solid 1px ${colors.blackH212121};
        color: ${colors.blackH212121};
        transition: 0.2s;
      `;
    case "red":
      return css`
        text-decoration: none;
        background-color: ${colors.redHe01e3c};
        border: solid 1px ${colors.redHe01e3c};
        color: ${colors.whiteHfff};
        transition: 0.2s;
      `;
    case "red-hanbitco":
      return css`
        text-decoration: none;
        background-color: ${colors.redHe01e3c};
        border: solid 1px ${colors.redHe01e3c};
        color: ${colors.whiteHfff};
        transition: 0.2s;
      `;
    case "red-outline":
      return css`
        text-decoration: none;
        background-color: inherit;
        border: 1px solid ${colors.redHe01e3c};
        transition: 0.2s;
        color: ${colors.redHe01e3c};
      `;
    case "primary":
      return css`
        background-color: #096563;
        border: solid 1px #096563;
        color: ${colors.whiteHfff};
        transition: 0.2s;
      `;
    case "danger":
      return css`
        background-color: ${colors.redHe00c2d};
        border: solid 1px ${colors.redHe00c2d};
        color: ${colors.whiteHfff};
        transition: 0.2s;
      `;
    case "link":
      return css`
        background-color: transparent;
        border: solid 1px transparent;
        color: ${colors.blueH597eff};
        transition: 0.2s;
      `;
    case "grey":
      return css`
        background-color: ${colors.greyH7a7a7a};
        border: solid 1px ${colors.greyH7a7a7a};
        color: ${colors.blackH2d2d2d};
        transition: 0.2s;
      `;
    case "blue":
      return css`
        background-color: ${colors.blueH597eff};
        border: solid 1px ${colors.blueH597eff};
        color: ${colors.whiteHfff};
        transition: 0.2s;
      `;
    default:
      return css`
        background-color: ${colors.whiteHfff};
        border: solid 1px ${colors.whiteHfff};
        color: #757575;
        transition: 0.2s;
      `;
  }
};

const hoverStyle = (props) => {
  const isClickable = !(props.disabled || props.isLoading);
  switch (props.theme) {
    case "black":
      return css`
        text-decoration: none;
        ${isClickable
          ? `
            background-color: ${colors.blackH4e4e4e};
            border-color: ${colors.blackH4e4e4e};
          `
          : null}
      `;
    case "black-outline":
      return css`
        text-decoration: none;
        ${isClickable
          ? `
            background-color: ${colors.blackH212121};
            border-color: ${colors.blackH212121};
            color: ${colors.whiteHfff};
          `
          : null}
      `;
    case "red":
      return css`
        text-decoration: none;
        ${isClickable
          ? `
            background-color: ${colors.redHb41931};
            border-color: ${colors.redHb41931};
          `
          : null}
      `;
    case "red-hanbitco":
      return css`
        text-decoration: none;
        ${isClickable
          ? `
            background-color: ${colors.redHeea7b2};
            border-color: ${colors.redHeea7b2};
          `
          : null}
      `;
    case "red-outline":
      return css`
        text-decoration: none;
        ${isClickable
          ? `
            background-color: ${colors.redHe01e3c};
            border-color: ${colors.redHe01e3c};
            color: ${colors.whiteHfff};
          `
          : null}
      `;
    case "primary":
      return css`
        text-decoration: none;
        ${isClickable
          ? `
            background-color: #064241;
            border-color: #053635;
          `
          : null}
      `;
    case "danger":
      return css`
        text-decoration: none;
        ${isClickable
          ? `
            background-color: ${colors.redHb41931};
            border-color: ${colors.redHb41931};
          `
          : null}
      `;
    case "link":
      return css`
        text-decoration: underline;
        color: ${colors.blackH2f2f2f};
        background-color: transparent;
        border-color: transparent;
      `;
    case "grey":
      return css`
        text-decoration: none;
        ${isClickable
          ? `
          background-color: ${colors.greyH9c9c9c};
          border-color: ${colors.greyH9c9c9c};
        `
          : null}
      `;
    case "blue":
      return css`
        text-decoration: none;
        ${isClickable
          ? `
          background-color: ${colors.lightBlueH87adff};
          border-color: ${colors.lightBlueH87adff};
        `
          : null}
      `;
    default:
      return css`
        text-decoration: none;
        ${isClickable
          ? `
          background-color: ${colors.greyHe7e7e7};
          border: solid 1px ${colors.greyHe7e7e7};
          `
          : null}
      `;
  }
};

const activeStyle = (props) => {
  switch (props.theme) {
    case "black":
      return css`
        text-decoration: none;
        background-color: ${props.disabled ? "#3E4044" : "#131416"};
        border-color: ${props.disabled ? "#3E4044" : "#131416"};
        color: ${props.disabled ? "#717379" : "#E01E3C"};
      `;
    case "black-outline":
      return css`
        text-decoration: none;
        background-color: ${props.disabled ? "#777" : "#444"};
        border-color: ${props.disabled ? "#777" : "#444"};
      `;
    case "red":
      return css`
        background-color: ${props.disabled
          ? colors.redHeea7b2
          : colors.redHe01e3c};
        border-color: ${props.disabled ? colors.redHeea7b2 : colors.redHe01e3c};
      `;
    case "red-outline":
      return css`
        background-color: ${props.disabled ? colors.redB : "inherit"};
        border-color: ${props.disabled ? colors.redB : colors.redA};
      `;
    case "primary":
      return css`
        background-color: ${props.disabled ? "#096563" : "#064241"};
        border-color: ${props.disabled ? "#096563" : "#053635"};
      `;
    case "danger":
      return css`
        background-color: ${props.disabled ? "#E94B00" : ""};
        border-color: ${props.disabled ? "#E94B00" : `${colors.redHfffbfc}`};
      `;
    case "link":
      return css`
        color: #031f1e;
        background-color: transparent;
        border-color: transparent;
      `;
    case "grey":
      return css`
        text-decoration: none;
        background-color: ${props.disabled ? "#3E4044" : "#6a7076"};
        border-color: ${props.disabled ? "#3E4044" : "#6a7076"};
        color: ${props.disabled ? "#717379" : "#26282d"};
      `;
    default:
      return css`
        text-decoration: none;
      `;
  }
};

const focusStyle = (props) => {
  switch (props.theme) {
    case "black":
      return css`
        text-decoration: none;
        box-shadow: 0 0 0 0.2rem rgba(#777, 0.5);
        outline: 0;
      `;
    case "black-outline":
      return css`
        text-decoration: none;
        box-shadow: 0 0 0 0.2rem rgba(#777, 0.5);
        outline: 0;
      `;
    case "red":
    case "red-outline":
      return css`
        text-decoration: none;
        outline: 0;
      `;
    case "primary":
      return css`
        text-decoration: none;
        box-shadow: 0 0 0 0.2rem rgba(9, 101, 99, 0.5);
        outline: 0;
      `;
    case "danger":
      return css`
        text-decoration: none;
        box-shadow: 0 0 0 0.2rem rgba(233, 75, 0, 0.5);
        outline: 0;
      `;
    case "link":
      return css`
        text-decoration: underline;
        box-shadow: none;
        outline: 0;
      `;
    case "grey":
      return css`
        text-decoration: none;
        box-shadow: 0 0 0 0.2rem rgba(#777, 0.5);
        outline: 0;
      `;
    default:
      return css`
        text-decoration: none;
      `;
  }
};

export const StyledButton = styled.button`
  display: inline-block;
  position: relative;
  text-align: center;
  user-select: none;
  white-space: nowrap;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.65" : null)};
  border-radius: 4px;

  ${fontSize}
  ${height}
  ${fullWidth}
  ${defaultStyle}

  &:hover {
    ${hoverStyle}
  }

  &:active {
    ${activeStyle}
  }

  &:focus {
    ${focusStyle}
  }

  ${({ buttonStyle }) => buttonStyle}
`;

export const InnerDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => props.innerStyle}
`;
