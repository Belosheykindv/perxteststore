import React from 'react'
import styles from './App.module.css'
import { Router } from './Router'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '../pages'
import { ShopPage } from '../pages/productsPage'
import { CartPage } from '../pages/cartPage'

export function App() {
  return (
    <div className={styles.app}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ShopPage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}
