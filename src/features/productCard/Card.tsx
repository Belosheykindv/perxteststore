import React from 'react'
import { Card as CardItem, Typography } from 'antd'
import styles from './Card.module.css'
type CardPropsT = {
  data: ProductItem
  addItemToCart?: (item: ProductItem) => void
}
const { Meta } = CardItem

export const Card = ({ data, addItemToCart }: CardPropsT) => {
  return (
    <CardItem
      hoverable
      style={{ padding: '8px' }}
      size="small"
      cover={
        <img
          alt="example"
          style={{ objectFit: 'contain', aspectRatio: '4/3', width: '220px' }}
          src={`https://test-frontend.dev.int.perx.ru${data.image}`}
        />
      }
      onClick={()=> addItemToCart && addItemToCart(data)}
    >
      <Meta
        title={<Typography className={styles.metaTitle}>{data.name}</Typography>}
        description={<Typography className={styles.metaPrice}>{`${data.price} $`}</Typography>}
      />
    </CardItem>
  )
}
