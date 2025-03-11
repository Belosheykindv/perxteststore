import React from 'react'
import { Card as CardItem, Typography } from 'antd'

import { BASE_URL } from 'shared/constants/settings'

import { CardCounter } from './atoms'

import styles from './Card.module.scss'


type CardPropsT = {
  cardItem: ProductItem
  addItemToCart: (item: ProductItem) => void
  decItemsCount: (name: string) => void
  count: number
}
const { Meta } = CardItem

export const CardComponent = ({
  cardItem,
  addItemToCart,
  decItemsCount,
  count,
}: CardPropsT) => {
  const cardContainerClass =
    count > 0
      ? `${styles.cardContainer} ${styles.counted}`
      : styles.cardContainer

  return (
    <CardItem
      className={cardContainerClass}
      size="small"
      cover={
        <img
          alt="example"
          style={{ objectFit: 'contain', aspectRatio: '4/3', width: '220px' }}
          src={`${BASE_URL}${cardItem.image}`}
        />
      }
    >
      <Meta
        className={styles.cardMeta}
        title={
          <Typography className={styles.metaTitle}>{cardItem.name}</Typography>
        }
        description={
          <Typography
            className={styles.metaPrice}
          >{`${cardItem.price} $`}</Typography>
        }
      />
      <CardCounter
        count={count}
        cardItem={cardItem}
        addItemToCart={addItemToCart}
        decItemsCount={decItemsCount}
      />
    </CardItem>
  )
}

export const Card = React.memo(CardComponent)
