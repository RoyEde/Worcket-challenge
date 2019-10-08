import React from 'react';
import { func, string } from 'prop-types';

import Button from '../../../Button';

const CartItem = ({ item, onDelete }) => {
  return (
    <li className="cartlist__item">
      <h4 className="cartlist__item__descriptor">{item}</h4>
      <Button aria-label={`Delete item ${item}`} danger onClick={onDelete}>
        Remove
      </Button>
    </li>
  );
};

CartItem.propTypes = {
  item: string.isRequired,
  onDelete: func.isRequired
};

export default CartItem;
