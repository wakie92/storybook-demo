import React from "react";
import PropTypes from "prop-types";

/**
 * When you want to show hello, use the `Hello` component..
 *
 * - If the `big` value is set to `true`, **Large** will appear..
 * - By setting `onHello` and `onBye` props, you can specify functions to call when the button is clicked..
 */

const Hello = ({ name, big, onHello, onBye }) => {
  return (
    <div>
      {big ? <h1>Hello, {name}!</h1> : <p>Hello, {name}!</p>}
      <div>
        <button onClick={onHello}>Hello</button>
        <button onClick={onBye}>Bye</button>
      </div>
    </div>
  );
};

Hello.propTypes = {
  /**  Name you want to show */
  name: PropTypes.string.isRequired,
  /** Setting this value to `true` renders it as an h1 tag. */
  big: PropTypes.bool,
  /** Function to call when the Hello button is pressed */
  onHello: PropTypes.func,
  /** Function to call when the Bye button is pressed */
  onBye: PropTypes.func,
};
Hello.defaultProps = {
  big: false,
  onHello: () => {},
  onBye: () => {},
};

export default Hello;
