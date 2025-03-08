import React from 'react'
import styles from './CartItem.module.scss'
import { Typography } from 'antd'
type CartItemsPropsT = {
  item: ProductItem
}
export const CartItem = ({ item }: CartItemsPropsT) => {
  return (
    <div className={styles.cartContainer}>
      <img src={`https://test-frontend.dev.int.perx.ru${item.image}`} />
      <Typography>{item.name}</Typography>
      <Typography>{`${item.price} $`}</Typography>
    </div>
  )
}
