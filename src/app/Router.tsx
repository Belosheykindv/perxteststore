import React from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { CartPage } from '../pages/cartPage'
import { ShopPage } from '../pages/productsPage'
import { Layout } from '../pages'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<ShopPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Route>,
  ),
)

export const Router = () => <RouterProvider router={router} />
