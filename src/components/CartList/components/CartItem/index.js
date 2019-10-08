import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../Button';

const CartItem = ({ item, onDelete }) => {
  return (
    <li className="cartlist__item">
      <h4 className="cartlist__item__descriptor">{item}</h4>
      <Button aria-label={`Delete item ${item}`} danger onClick={onDelete}>Delete</Button>
    </li>
  );
};

CartItem.propTypes = {
  
};

export default CartItem;