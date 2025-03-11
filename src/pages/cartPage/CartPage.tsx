import React from 'react'

import styles from './CartPage.module.scss'

import { Cart } from '../../widgets/cart'
import { Footer } from '../../features/footer'
import { Header } from '../../features/header'

export const CartPage = () => (
  <div className={styles.container}>
    <Header />
    <Cart />
    <Footer />
  </div>
)
