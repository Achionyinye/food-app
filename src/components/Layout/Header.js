import React, { Fragment } from 'react'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
import image from './meals.jpeg'

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <div>ReactMeals</div>
                <HeaderCartButton onClickCart={props.onShowCart} />
            </header>
            <div>
                <img className={classes.img} src={image} />
            </div>
        </Fragment>
    )
}

export default Header