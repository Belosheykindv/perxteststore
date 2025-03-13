import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from 'pages'
import { CartPage } from 'pages/cartPage'
import { ProductsPage } from 'pages/productsPage'

import styles from './App.module.scss'


interface AppProps {
  dealers: string[]
}

export function App({ dealers }: AppProps) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductsPage dealers={dealers} />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
