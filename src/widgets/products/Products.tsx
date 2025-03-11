import { v1 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import React, { useCallback, useEffect, useState } from 'react'

import style from './Products.module.css'

import { Card } from '../../features/productCard'
import { useGetProductsQuery } from '../../shared/api'
import { addItem, decCount } from '../../shared/store/cart'
import { AppDispatch, RootState } from '../../shared/store/store'

type ShopProsT = {
  dealers: string[]
}

export const Products = ({ dealers }: ShopProsT) => {
  const [products, setProducts] = useState<ProductItem[]>([])

  const { data: productsData, isSuccess } = useGetProductsQuery(dealers)

  const cartItems = useSelector((state: RootState) => state.cart.items)

  const dispatch: AppDispatch = useDispatch()

  const handleAddItem = useCallback(
    (item: ProductItem) => {
      const newItem = { ...item, id: `cart_${v1()}` }
      dispatch(addItem(newItem))
    },
    [dispatch],
  )

  const handleDecCount = useCallback(
    (name: string) => {
      dispatch(decCount(name))
    },
    [dispatch],
  )

  useEffect(() => {
    if (isSuccess && productsData) {
      const productsWithId = productsData.map((item) => ({ ...item, id: v1() }))
      setProducts(productsWithId)
    }
  }, [productsData, isSuccess])

  return (
    <div className={style.shopContainer}>
      {products && isSuccess && products.length > 0
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
