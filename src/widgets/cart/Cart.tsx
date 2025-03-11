import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect, useState } from 'react'

import styles from './Cart.module.scss'

import { CartItem } from '../../features/cartItem'
import { AppDispatch, RootState } from '../../shared/store/store'
import {
  clearCart,
  decCount,
  incCount,
  removeItem,
} from '../../shared/store/cart'


export const Cart = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const cartItems = useSelector((state: RootState) => state.cart.items)

  const dispatch = useDispatch<AppDispatch>()

  const handleClearCart = useCallback(() => {
    dispatch(clearCart('nonArgument'))
  }, [dispatch])

  const handleDeleteItem = useCallback(
    (id: string) => {
      dispatch(removeItem(id))
    },
    [dispatch]
  )

  const handleSelect = useCallback(
    (itemId: string) => {
      setSelectedItems((prevSelected) =>
        prevSelected.includes(itemId)
          ? prevSelected.filter((id) => id !== itemId)
          : [...prevSelected, itemId]
      )
    },
    []
  )

  const handleIncCount = useCallback(
    (name: string) => {
      dispatch(incCount(name))
    },
    [dispatch]
  )

  const handleDecCount = useCallback(
    (name: string) => {
      dispatch(decCount(name))
    },
    [dispatch]
  )

  useEffect(() => {
    cartItems.forEach(
      (item) => item.count === 0 && dispatch(removeItem(item.id))
    )
  }, [cartItems, dispatch])

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
      {cartItems.length !== 0 && (
        <Button
          className={styles.clearBtn}
          disabled={cartItems.length === 0}
          type="primary"
          onClick={() => handleClearCart()}
        >
          Очистить корзину
        </Button>
      )}
    </div>
  )
}
