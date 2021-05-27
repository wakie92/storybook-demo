import React from 'react';
import PropTypes from 'prop-types';

const BulldaxText = ({ children }) => {
  return <>{children}</>;
};

BulldaxText.propTypes = {
  children: PropTypes.string.isRequired,
};
export default BulldaxText;
