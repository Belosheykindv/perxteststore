import React, { useEffect } from 'react'
import styles from './Cart.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../shared/store/store'
import { CartItem } from '../../features/shopCart'
import { Button } from 'antd'
import { clearCart } from '../../shared/store/cart'

export const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch<AppDispatch>()

  const handleClearCart = () => {
    dispatch(clearCart('nonArgument'))
  }
  useEffect(() => {
    if (cartItems.length > 0) {
      sessionStorage.setItem('cartData', JSON.stringify(cartItems))
    }
  }, [cartItems])

  return (
    <div className={styles.cartContainer}>
      {cartItems.length > 0
        ? cartItems.map((item, index) => <CartItem item={item} key={index} />)
        : 'Корзина пуста'}
      <Button onClick={() => handleClearCart()}>Очистить корзину</Button>
    </div>
  )
}
