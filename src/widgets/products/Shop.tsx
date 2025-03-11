import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v1 } from 'uuid'

import style from './Shop.module.css'
import { useGetProductsQuery } from '../../shared/api'
import { addItem, decCount } from '../../shared/store/cart'
import { AppDispatch, RootState } from '../../shared/store/store'
import { Card } from '../../features/productCard'

type ShopProsT = {
  dealers: string[]
}
export const Shop = ({ dealers }: ShopProsT) => {
  const [products, setProducts] = useState<ProductItem[]>([])

  const { data: productsData, isSuccess } = useGetProductsQuery(dealers)

  const cartItems = useSelector((state: RootState) => state.cart.items)

  const dispatch: AppDispatch = useDispatch()

  const handleAddItem = (item: ProductItem) => {
    const newItem = { ...item, id: `cart_${v1()}` }
    dispatch(addItem(newItem))
  }
  const handleDecCount = (name: string) => {
    dispatch(decCount(name))
  }

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
              decItemsCount={handleDecCount}
              count={
                cartItems.find((cart) => cart.name === item.name)?.count || -1
              }
            />
          ))
        : `Отсутствуют товары по данным идентификаторам`}
    </div>
  )
}
