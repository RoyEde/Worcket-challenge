import React from 'react';
import { bool } from 'prop-types';

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
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  danger: bool,
  disabled: bool,
  primary: bool
};

export default Button;
