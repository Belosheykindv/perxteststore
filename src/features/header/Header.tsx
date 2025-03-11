import React from 'react'
import { useSelector } from 'react-redux'

import styles from './header.module.scss'

import { RootState } from '../../shared/store/store'
import { CartButton, MainPageButton } from './atoms'

export const Header = () => {
  const cartItemsCount = useSelector(
    (state: RootState) => state.cart.items,
  ).reduce((acc, item) => acc + item.count, 0)

  return (
    <div className={styles.header}>
      <MainPageButton />
      <CartButton count={cartItemsCount} />
    </div>
  )
}
