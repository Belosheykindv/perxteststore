import { Button, Typography } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'

import styles from '../Card.module.scss'


type CardCounterProsT = {
  count: number
  cardItem: ProductItem
  addItemToCart: (item: ProductItem) => void
  decItemsCount: (name: string) => void
}

export const CardCounter = ({
  count,
  addItemToCart,
  decItemsCount,
  cardItem,
}: CardCounterProsT) => {
  return (
    <>
      {count > 0 && (
        <>
          <div className={styles.countNumber}>
            <Typography>{count}</Typography>
          </div>
          <div className={styles.minusBtn}>
            <Button
              onClick={() => decItemsCount(cardItem.name)}
              icon={<MinusOutlined />}
            ></Button>
          </div>
        </>
      )}
      <div className={styles.plusBtn}>
        <Button
          onClick={() => addItemToCart(cardItem)}
          icon={<PlusOutlined />}
        ></Button>
      </div>
    </>
  )
}
