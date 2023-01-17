import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css'

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext)
  
  const numberOfItem = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount
  }, 0)

  return (
    <div className={classes.button} onClick={props.onClickCart}>
          <div className={classes.icon}><CartIcon /></div>
          <span>Your Cart</span>
      <span className={classes.badge}>{ numberOfItem }</span>
      </div>
  )
}

export default HeaderCartButton