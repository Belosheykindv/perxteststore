import { Typography } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../header.module.scss'

export const CartButton = () => {
  return (
    <NavLink to={'/cart'}>
      <Typography className={styles.cart}>Корзина</Typography>
    </NavLink>
  )
}
