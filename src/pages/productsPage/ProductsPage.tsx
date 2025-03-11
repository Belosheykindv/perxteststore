import { Header } from 'features/header'
import { Products } from 'widgets/products'

import styles from './ProductsPage.module.scss'


type ProductsPagePropsT = {
  dealers: string[]
}
export const ProductsPage = ({ dealers }: ProductsPagePropsT) => {
  return (
    <div className={styles.productPageContainer}>
      <Header />
      <Products dealers={dealers} />
    </div>
  )
}
