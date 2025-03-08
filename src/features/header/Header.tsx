import React from 'react'
import styles from './header.module.scss'
import { Typography } from 'antd'
import { NavLink } from 'react-router-dom'
import { CartButton, MainPageButton } from './atoms'

export const Header = () => {
  return (
    <div className={styles.header}>
      <MainPageButton />
      <CartButton />
    </div>
  )
}
