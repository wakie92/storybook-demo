import styled from "styled-components";

export const ColorCard = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 4px;
  border: 2px solid ${({ bgColor }) => bgColor};
`;

export const ColorDiv = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  width: 98px;
  height: 25px;
`;

export const ColorLabel = styled.div`
  width: 100px;
  height: 25px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  > div {
    margin: 1rem;
  }
`;
