import React from 'react'
import { Typography } from 'antd'
import { NavLink } from 'react-router-dom'

import styles from '../header.module.scss'

export const CartButton = ({ count }: { count: number }) => {
  return (
    <NavLink to={'/cart'}>
      <Typography className={styles.cart}>{`Корзина (${count})`}</Typography>
    </NavLink>
  )
}
