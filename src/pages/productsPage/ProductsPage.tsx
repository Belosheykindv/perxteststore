import React from 'react'

import styles from './ProductsPage.module.scss'
import { Header } from '../../features/header'
import { Shop } from '../../widgets/shop'

type ProductsPagePropsT = {
  dealers: string[]
}
export const ProductsPage = ({ dealers }: ProductsPagePropsT) => {
  return (
    <div className={styles.productPageContainer}>
      <Header />
      <Shop dealers={dealers} />
    </div>
  )
}
