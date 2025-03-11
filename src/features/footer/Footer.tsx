import React from 'react'
import { Space, Typography } from 'antd'

import styles from './Footer.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../shared/store/store'

export const Footer = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const finalPrice = cartItems.reduce((acc, cur)=> acc + cur.count*cur.price, 0)
  
  return (
    <Space className={styles.footerContainer}>
      <Typography>Итоговая сумма:</Typography>
      <Typography className={styles.finalPrice}>{`${Math.round(finalPrice)} $`}</Typography>
    </Space>
  )
}
