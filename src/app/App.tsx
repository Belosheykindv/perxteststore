import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import styles from './App.module.css'

import { Layout } from '../pages'
import { ProductsPage } from '../pages/productsPage'
import { CartPage } from '../pages/cartPage'

interface AppProps {
  dealers: string[]
}

export function App({ dealers }: AppProps) {
  return (
    <div className={styles.app}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductsPage dealers={dealers} />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}
