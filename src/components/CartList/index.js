import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';

import CartItem from './components/CartItem';

const CartList = ({ items, loading, onDelete }) => {
  return (
    <div className="cartlist">
      <h3 className="cartlist__count">
        {loading
          ? 'Loading...'
          : items.length === 0
          ? 'List is empty!'
          : `Items: ${items.length}`}
      </h3>
      <ul>
        {items.map(({ item, id }) => (
          <CartItem key={id} item={item} loading={loading} onDelete={() => onDelete(id)} />
        ))}
      </ul>
    </div>
  );
};

CartList.propTypes = {
  items: arrayOf(
    shape({
      id: string.isRequired,
      item: string.isRequired
    })
  ).isRequired,
  loading: bool,
  onDelete: func.isRequired
};

export default CartList;
