import styled from 'styled-components';

import { colors } from '../../styles/theme';

export const CheckContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
  ${({ containerStyle }) => containerStyle}
`;

export const CheckBox = styled.div`
  min-width: 20px;
  min-height: 20px;
  margin-right: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isChecked, theme }) =>
    isChecked
      ? `
  background: ${colors.redHe01e3c};
  border: 0.5px solid ${colors.redHe01e3c};
  `
      : `
  border: 0.5px solid ${theme.colors.border.regular};
  `}
  box-sizing: border-box;
  border-radius: ${({ isRound }) => (isRound ? `100px` : `2px`)};

  /* stylelint-disable-next-line selector-max-empty-lines */
  ${({ disabled, isChecked, theme }) => {
    if (!isChecked && disabled) {
      return `
        background: ${theme.colors.border.checkbox};
        border: 0.5px solid ${theme.colors.border.checkbox};
      `;
    }
    if (isChecked && !disabled) {
      return `
        background: ${theme.colors.bckground.checkboxOn};
        border: 0.5px solid ${theme.colors.bckground.checkboxOn};
        & > i { color: ${theme.colors.bckground.body}; }
      `;
    }
    if (isChecked && disabled) {
      return `
        background: ${theme.colors.bckground.checkboxOn};
        border: 0.5px solid ${theme.colors.bckground.checkboxOn};
        & > i { color: ${theme.colors.bckground.checkboxDisabled}; }
      `;
    }
    return `
      background: ${theme.colors.bckground.checkboxOff};
      border: 0.5px solid ${theme.colors.border.checkbox};
      & > i { color: ${theme.colors.border.checkbox}; }
    `;
  }}

  & > i {
    margin-top: 0;
    font-size: 10px;
  }
  ${({ checkBoxStyle }) => checkBoxStyle}
`;

export const CheckBoxLabel = styled.div`
  font-weight: normal;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
  ${({ labelStyle }) => labelStyle}
`;
