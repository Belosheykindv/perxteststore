import styles from './ProductsPage.module.scss'
import { Header } from '../../features/header'
import { Products } from '../../widgets/products'


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
