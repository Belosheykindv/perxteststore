import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Cart.module.scss'

import { CartItem } from '../../features/cartItem'
import { AppDispatch, RootState } from '../../shared/store/store'
import {
  addItem,
  clearCart,
  decCount,
  incCount,
  removeItem,
} from '../../shared/store/cart'
import { v1 } from 'uuid'

export const Cart = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const cartItems = useSelector((state: RootState) => state.cart.items)

  const dispatch = useDispatch<AppDispatch>()

  const handleClearCart = () => {
    dispatch(clearCart('nonArgument'))
  }

  const handleDeleteItem = (id: string) => {
    dispatch(removeItem(id))
  }

  const handleSelect = (itemId: string) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(itemId)
        ? prevSelected.filter((id) => id !== itemId)
        : [...prevSelected, itemId],
    )
  }

  const handleIncCount = (name: string) => {
    dispatch(incCount(name))
  }
  const handleDecCount = (name: string) => {
    dispatch(decCount(name))
  }

  useEffect(() => {
    if (cartItems.length > 0) {
      sessionStorage.setItem('cartData', JSON.stringify(cartItems))
    }
    cartItems.forEach(item=> item.count === 0 &&  dispatch(removeItem(item.id)) )
  }, [cartItems])

  return (
    <div className={styles.cartContainer}>
      {cartItems.length > 0
        ? cartItems.map((item) => (
            <CartItem
              item={item}
              key={`cart_${item.id}`}
              deleteItem={handleDeleteItem}
              isSelected={selectedItems.includes(item.id)}
              onSelect={handleSelect}
              count={item.count}
              onIncrement={handleIncCount}
              onDecrement={handleDecCount}
            />
          ))
        : 'Корзина пуста'}
      <Button
        className={styles.clearBtn}
        type="primary"
        onClick={() => handleClearCart()}
      >
        Очистить корзину
      </Button>
    </div>
  )
}
