import styled, { css } from 'styled-components';

export const gapStyle = (direction, gap) => {
  const marginType = direction === 'row' ? 'margin-left' : 'margin-top';

  return css({
    'button + button': {
      [marginType]: `${gap} !important`,
    },
  });
};

export const rightAlignStyle = css`
  justify-content: flex-end;
`;

export const ButtonGroupWrapper = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ rightAlign }) => rightAlign && 'flex-end'};

  ${({ flexDirection, gap }) => gapStyle(flexDirection, gap)};
`;
