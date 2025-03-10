import React from 'react'
import { Shop } from '../../widgets/shop/Shop'
import { Header } from '../../features/header'

type ShopPageProsT = {
  dealers: string[]
}
export const ShopPage = ({dealers}: ShopPageProsT) => {
  return (
    <>
      <Header />
      <Shop dealers={dealers} />
    </>
  )
}
