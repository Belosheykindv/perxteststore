import React from 'react'
import { Cart } from '../../widgets/cart'
import { Header } from '../../features/header'
import styles from './CartPage.module.scss'
import { Footer } from '../../features/footer'

export const CartPage = () => (
  <div className={styles.container}>
    <Header />
    <Cart />
    <Footer />
  </div>
)
