import React from 'react'
import { Card as CardItem, Typography } from 'antd'

import styles from './Card.module.scss'

type CardPropsT = {
  cardItem: ProductItem
  addItemToCart?: (item: ProductItem) => void
  count: number
}
const { Meta } = CardItem

export const Card = ({ cardItem: data, addItemToCart, count }: CardPropsT) => {
  const cardContainerClass = count
    ? `${styles.cardContainer} ${styles.counted}`
    : styles.cardContainer
  return (
    <CardItem
      className={cardContainerClass}
      style={{ padding: '8px' }}
      hoverable
      size="small"
      cover={
        <img
          alt="example"
          style={{ objectFit: 'contain', aspectRatio: '4/3', width: '220px' }}
          src={`https://test-frontend.dev.int.perx.ru${data.image}`}
        />
      }
      onClick={() => addItemToCart && addItemToCart(data)}
    >
      <Meta
        title={
          <Typography className={styles.metaTitle}>{data.name}</Typography>
        }
        description={
          <Typography
            className={styles.metaPrice}
          >{`${data.price} $`}</Typography>
        }
      />
      {count && (
        <div className={styles.countNumber}>
          <Typography>{count}</Typography>
        </div>
      )}
    </CardItem>
  )
}
