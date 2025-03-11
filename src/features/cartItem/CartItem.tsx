import React from 'react'
import { Button, Space, Typography } from 'antd'

import styles from './CartItem.module.scss'
import { CardTitle, InputCounter } from './atoms'
import { BASE_URL } from '../../shared/constants/settings'

type CartItemsPropsT = {
  item: ProductItem
  deleteItem: (id: string) => void
  isSelected: boolean
  onSelect: (id: string) => void
  count: number
  onIncrement: (name: string) => void
  onDecrement: (name: string) => void
}

export const CartItemComponent = ({
  item,
  onSelect,
  deleteItem,
  count,
  onDecrement,
  onIncrement,
}: CartItemsPropsT) => {
  return (
    <Space className={styles.cartContainer} onClick={() => onSelect(item.id)}>
      <CardTitle name={item.name} image={`${BASE_URL}${item.image}`} />
      <Space className={styles.cartBtnBlock}>
        <InputCounter
          count={count}
          onPlus={onIncrement}
          onMinus={onDecrement}
          itemName={item.name}
        />

        <Typography>{`${Math.round(item.price * count)} $`}</Typography>
        <Button
          className={styles.delBtn}
          type="primary"
          onClick={() => deleteItem(item.id)}
        >
          X
        </Button>
      </Space>
    </Space>
  )
}

export const CartItem = React.memo(CartItemComponent)
