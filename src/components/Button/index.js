import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Button = ({ children, danger, disabled, primary, ...props }) => {
  return (
    <button
      {...props}
      className={`button ${
        primary ? 'button--primary' : ''
      } ${
        disabled ? 'button--disabled' : ''
      } ${
        danger ? 'button--danger' : ''
      }
      `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {};

export default Button;
