import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} size={'2rem'} color={'black'} />
      <span>{1}</span>
    </div>
  );
};

export default CartWidget;