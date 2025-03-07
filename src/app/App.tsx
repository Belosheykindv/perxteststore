import React from 'react'
import styles from './App.module.css'
import { Header } from '../features/header'
import { Shop } from '../widgets/shop/Shop'

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Shop />
    </div>
  )
}
