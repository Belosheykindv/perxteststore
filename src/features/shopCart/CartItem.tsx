import React from 'react'
import { Button, InputNumber, Space, Typography } from 'antd'

import styles from './CartItem.module.scss'
import { CardTitle, InputCounter } from './atoms'

type CartItemsPropsT = {
  item: ProductItem
  deleteItem: (id: string) => void
  isSelected: boolean
  onSelect: (id: string) => void
  count: number
  onIncrement: (name: string) => void
  onDecrement: (name: string) => void
}

export const CartItem = ({
  item,
  // isSelected,
  onSelect,
  deleteItem,
  count,
  onDecrement,
  onIncrement,
}: CartItemsPropsT) => {
  // const cartContainerClass = isSelected
  //   ? `${styles.cartContainer} ${styles.selected}`
  //   : styles.cartContainer

  return (
    <Space className={styles.cartContainer} onClick={() => onSelect(item.id)}>
      <CardTitle
        name={item.name}
        price={item.price}
        image={`https://test-frontend.dev.int.perx.ru${item.image}`}
      />
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
