import PropTypes from "prop-types";
import { ButtonStory } from "./styled";

/** The `Button` component is used to trigger an action.  */
const Button = ({
  children,
  onClick,
  size,
  theme,
  disabled,
  width,
  iconOnly,
}) => {
  return (
    <ButtonStory
      theme={theme}
      size={size}
      width={width}
      iconOnly={iconOnly}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonStory>
  );
};

Button.propTypes = {
  /** content of button inside */
  children: PropTypes.node.isRequired,
  /** function to call when clicking */
  onClick: PropTypes.func,
  /** Sets the appearance of the button */
  theme: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  /** Sets the size of the button */
  size: PropTypes.oneOf(["small", "medium", "big"]),
  /** Sets the disabled */
  disabled: PropTypes.bool,
  /** Sets the width what you want */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  iconOnly: PropTypes.bool,
};

Button.defaultProps = {
  theme: "primary",
  size: "medium",
  disabled: false,
  iconOnly: false,
};

export default Button;
