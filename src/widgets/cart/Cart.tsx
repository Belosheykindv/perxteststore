import React, { useEffect, useState } from 'react'
import { Button } from 'antd'

import styles from './Cart.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { CartItem } from '../../features/shopCart'
import { AppDispatch, RootState } from '../../shared/store/store'
import { clearCart, decCount, incCount, removeItem } from '../../shared/store/cart'

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
      <Button onClick={() => handleClearCart()}>Очистить корзину</Button>
    </div>
  )
}
