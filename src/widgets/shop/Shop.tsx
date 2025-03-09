import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v1 } from 'uuid'

import style from './Shop.module.css'
import { useGetDealersQuery, useGetProductsQuery } from '../../shared/api'
import { addItem } from '../../shared/store/cart'
import { AppDispatch, RootState } from '../../shared/store/store'
import { Card } from '../../features/productCard'

function countNames(names: ProductItem[]): { [key: string]: number } {
  const nameCounts: { [key: string]: number } = {}

  for (const name of names) {
    nameCounts[name.name] = (nameCounts[name.name] || 0) + 1
  }

  return nameCounts
}

export const Shop = () => {
  const [products, setProducts] = useState<ProductItem[]>([])
  const { data: dealersData } = useGetDealersQuery()
  const {
    data: productsData,
    isSuccess,
    isError,
  } = useGetProductsQuery(dealersData ? dealersData : [])

  const cartItems = useSelector((state: RootState) => state.cart.items)

  const dispatch: AppDispatch = useDispatch()

  const handleAddItem = (item: ProductItem) => {
    const newItem = { ...item, id: `cart_${v1()}` }
    dispatch(addItem(newItem))
  }
  // console.log('test ', products, cartItems)
  useEffect(() => {
    if (isSuccess && productsData) {
      const productsWithId = productsData.map((item) => ({ ...item, id: v1() }))
      sessionStorage.setItem('dealersData', JSON.stringify(productsWithId))
      setProducts(productsWithId)
    }
  }, [productsData, isSuccess])

  return (
    <div className={style.shopContainer}>
      {products && products.length > 0
        ? products.map((item) => (
            <Card
              cardItem={item}
              key={item.id}
              addItemToCart={handleAddItem}
              count={
                cartItems.find((cart) => cart.name === item.name)?.count || 0
              }
            />
          ))
        : `Ошибка - ${isError}`}
    </div>
  )
}
