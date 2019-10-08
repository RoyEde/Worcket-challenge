import React from 'react';
import PropTypes from 'prop-types';

import CartItem from './components/CartItem';

import './styles.css';

const CartList = ({ onDelete, items }) => {
  return (
    <div className="cartlist">
      <h2>
        {items.length === 0 ? 'List is empty!' : `Items: ${items.length}`}
      </h2>
      <ul>
        {items.map(({ item, id }) => (
          <CartItem key={id} item={item} onDelete={() => onDelete(id)} />
        ))}
      </ul>
    </div>
  );
};

CartList.propTypes = {};

export default CartList;
