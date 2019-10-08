import React from 'react';
import { bool, func, string } from 'prop-types';

import Button from '../../../Button';

const CartItem = ({ loading, item, onDelete }) => {
  return (
    <li className="cartlist__item">
      <h3 className="cartlist__item__descriptor">{item}</h3>
      <Button
        aria-label={`Delete item ${item}`}
        danger
        disabled={loading}
        onClick={onDelete}
      >
        Remove
      </Button>
    </li>
  );
};

CartItem.propTypes = {
  item: string.isRequired,
  loading: bool,
  onDelete: func.isRequired
};

export default CartItem;
