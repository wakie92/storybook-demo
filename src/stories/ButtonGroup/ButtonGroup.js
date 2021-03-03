import PropTypes from "prop-types";
import { ButtonGroupWrapper } from "./styled";

/**
 * Use `ButtonGroup` component to show multiple `Button` components or to align buttons to the right.
 */

const ButtonGroup = ({
  direction,
  rightAlign,
  gap,
  children,
  customStyle,
  className,
}) => {
  return (
    <ButtonGroupWrapper
      flexDirection={direction}
      rightAlign={rightAlign}
      gap={gap}
      style={customStyle}
      className={className}
    >
      {children}
    </ButtonGroupWrapper>
  );
};

ButtonGroup.propTypes = {
  /** Direction to show buttons */
  direction: PropTypes.oneOf(["row", "column"]).isRequired,
  /** Show button to right. */
  rightAlign: PropTypes.bool,
  /** Sets the distance between the button and buttons. */
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Buttons to show in the Button Group */
  children: PropTypes.node.isRequired,
  /** Use when you want to customize your style */
  className: PropTypes.string,
  customStyle: PropTypes.shape({}),
};

ButtonGroup.defaultProps = {
  direction: "row",
  gap: "0.5rem",
  rightAlign: false,
  customStyle: null,
};

export default ButtonGroup;
