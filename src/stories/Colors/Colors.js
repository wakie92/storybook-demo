import PropTypes from "prop-types";

import { ColorDiv, ColorCard, ColorLabel } from "./styled";

const Colors = ({ bgColor }) => {
  return (
    <ColorCard bgColor={bgColor}>
      <ColorDiv bgColor={bgColor}></ColorDiv>
      <ColorLabel>{bgColor}</ColorLabel>
    </ColorCard>
  );
};

Colors.propTypes = {
  bgColor: PropTypes.string.isRequired,
};
export default Colors;
