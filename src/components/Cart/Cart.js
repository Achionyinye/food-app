import React, { useEffect, useState } from "react";
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const Cart = (props) => {

  const cartItems = (
    <ul className={['cart-items']}>
          {[{ id: "c1", name: "Sushi", amount: 12.99 }].map((item) => (
               item.id,
          <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
          <div className={classes.total}>
              <span>Total Amount</span>
              <span>35.62</span>
      </div>
          <div className={classes.actions}>
        <button className={classes['butoon--alt']} onClick={props.onHideCart}>Close</button>
              <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
