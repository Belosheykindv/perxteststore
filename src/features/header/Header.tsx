import React from 'react'
import styles from './header.module.scss'
import { CartButton, MainPageButton } from './atoms'
import { useSelector } from 'react-redux'
import { RootState } from '../../shared/store/store'

export const Header = () => {
  const cartItemsCount = useSelector((state: RootState) => state.cart.items).reduce((acc, item)=> acc + item.count, 0)
  return (
    <div className={styles.header}>
      <MainPageButton />
      <CartButton count={cartItemsCount} />
    </div>
  )
}
