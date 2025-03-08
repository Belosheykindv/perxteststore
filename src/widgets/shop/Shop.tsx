import React, { useEffect } from 'react'
import style from './Shop.module.css'
import { Card } from 'features/productCard'

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'shared/store/store'
import { useGetProductsQuery } from 'shared/api/getProducts'
import { useGetDealersQuery } from 'shared/api/getDealersId'
import { addItem } from 'shared/store/cart'

export const Shop = () => {
  const { data: dealersData } = useGetDealersQuery()
  const { data: productsData, isSuccess, isError } = useGetProductsQuery(
    dealersData ? dealersData : [],
  ) // Передайте массив ID дилеров или undefined

  const dispatch: AppDispatch = useDispatch()

  const handleAddItem = (item: ProductItem) => {
    dispatch(addItem(item))
  }

  useEffect(() => {
    if (isSuccess && productsData) {
      sessionStorage.setItem('dealersData', JSON.stringify(productsData))
    }
  }, [productsData, isSuccess])

  // const products: ProductItem[] = (() => {
  //   const storedData = sessionStorage.getItem('dealersData')

  //   if (storedData) {
  //     try {
  //       return JSON.parse(storedData) as ProductItem[]
  //     } catch (error) {
  //       console.error('Error parsing dealersData from sessionStorage:', error)
  //       return []
  //     }
  //   }
  //   return []
  // })()

  return (
    <div className={style.shopContainer}>
      {productsData && productsData.length > 0
        ? productsData.map((item, index) => (
            <Card data={item} key={index} addItemToCart={handleAddItem} />
          ))
        : `Ошибка - ${isError}`
        // products &&
        //   products.length > 0 &&
        //   products.map((item, index) => (
        //     <Card data={item} key={index} addItemToCart={handleAddItem} />
        //   ))
          }
    </div>
  )
}
